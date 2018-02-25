const r = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
const checkAuth = require('./controllers/helpers/checkAuth');
const checkAdmin = require('./controllers/helpers/checkAdmin');
const jwt = require('jsonwebtoken')
module.exports = r;

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});



r.get('/', (req, res) => {
  res.render('home', {})
})

r.post('/api/v1/cloudload', upload.single('file'), (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { resource_type: 'auto' },
    function(error, result) {
      console.log(error, 'CLOUD ERROR');
      console.log(result, 'CLOUD result');
      result.secure_url
        ? res.json({
            url: result.secure_url,
            format: result.format,
            type: result.resource_type
          })
        : res.json('something went wrong');
    }
  );
});

const account = require('./controllers/account');
r.post('/api/v1/signup', account.signup);
r.post('/api/v1/login', account.login);
r.get('/api/v1/user', account.get);
r.get('/api/v1/logout', account.logout);
r.post('/api/v1/updateImage', checkAuth, account.image);
r.put('/api/v1/user/update', checkAuth, account.update);

const events = require('./controllers/events');
r.get('/api/v1/events', events.get);
r.put('/api/v1/events/:id', checkAdmin, events.put);
r.delete('/api/v1/events/:id', checkAdmin, events.deleteevents);
r.post('/api/v1/events', checkAdmin, events.post);
r.patch('/api/v1/events', events.patch);
r.get('/api/v1/events/:userID', checkAuth, events.FindUsersEvents);

let passport = require('passport')
require('./passport')



r.get('/login/linkedin', passport.authenticate('linkedin-login'))
r.get('/api/v1/linkedin',
  passport.authenticate('linkedin-login', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })
)


r.get('/signup/linkedin', passport.authenticate('linkedin-signup'))
r.get('/api/v1/linkedin/signup',
  passport.authenticate('linkedin-signup', {
    failureRedirect: '/login',
    successRedirect: '/profile'
  })
)

r.get('/login', (req, res) => res.render('home', {}))
r.get('/events', (req, res) => res.render('home', {}))
r.get('/about', (req, res) => res.render('home', {}))
r.get('/contact', (req, res) => res.render('home', {}))
r.get('/addevent', (req, res) => res.render('home', {}))
r.get('/profile', (req, res) => res.render('home', {}))
r.get('/add', (req, res) => res.render('home', {}))