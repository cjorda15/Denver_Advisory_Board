let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let path = require('path');
let bodyParser = require('body-parser');
let compression = require('compression');
let helmet = require('helmet');
let logger = require('morgan');
let passport = require('passport');
require('dotenv').config();
let mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URL || process.env.localMongo;
mongoose.connect(mongoURL);
let User = require('./models/users');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 2419200000 },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
if (!process.env.NODE_ENV) app.use(logger('dev'));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.set('views', './server/views');
app.set('view engine', 'pug');
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public'));

app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.log(err.message);
  res.status(err.status || 500);
  res.render('error', { error: err.status, message: err.message });
});

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => {
  console.log(`Worker ${process.pid} listening at port ${port}`);
}).timeout = 2400000;
