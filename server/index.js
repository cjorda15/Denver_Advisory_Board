let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let path = require('path');
let bodyParser = require('body-parser');
let compression = require('compression');
let helmet = require('helmet');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
require('dotenv').config();
let mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URL || process.env.localMongo;
mongoose.connect(mongoURL);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
if (!process.env.NODE_ENV) app.use(logger('dev'));

app.set('views', './server/views');
app.set('view engine', 'pug');
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public'));

// app.use(function(req, res, next) {
//   var err = new Error('File Not Found');
//   err.status = 404;
//   next(err);
// });
//
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', { error: err.status, message: err.message });
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Worker ${process.pid} listening at port ${port}`);
});
