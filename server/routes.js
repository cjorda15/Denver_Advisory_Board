const router = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const CronJob = require('cron').CronJob;
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
const USERS = require('./models/users.js');
const mongoose = require('mongoose');

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});

router.post('/image', upload.single('file'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, function(result) {
    console.log(result, 'result');
  });
});

router.post('/user', (req, res) => {
  const Users = mongoose.model('USERS', USERS);
  const { username, password, email } = req.body;
  const user = new Users({
    name: username,
    password: password,
    email: email
  });

  Users.findOne(
    {
      name: username
    },
    (err, presentUser) => {
      err
        ? res.json('SERVER FAILURE')
        : presentUser
          ? res.json('ALREADY TAKEN')
          : user.save(function(error) {
              res.json('CREATED USER');
              if (error) {
                res.json('SERVER FAILURE');
                return;
              }
            });
    }
  );
});

router.get('/user', (req, res) => {
  const Users = mongoose.model('USERS', USERS);
  const { username, password } = req.query;
  Users.findOne(
    {
      name: username,
      password: password
    },
    (err, presentUser) => {
      err
        ? res.json('SERVER FAILURE')
        : presentUser ? res.json('LOGIN SUCCESS') : res.json('LOGIN FAILURE');
    }
  );
});
module.exports = router;
