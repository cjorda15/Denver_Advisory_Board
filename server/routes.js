const router = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const CronJob = require('cron').CronJob;
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
const User = require('./models/users.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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
  let { username, password, email } = req.body;
  password = bcrypt.hashSync(password, 10)
  const user = new User({
    name: username,
    password: password,
    email: email
  });
  user.save((error, user) => {
    if (error) {
      res.json('SERVER FAILURE');
      return;
    } else {
      user.password = undefined
      res.json(user)
    }
  });
});


router.get('/user', (req, res) => {
  const { email, password } = req.query;
  User.findOne(
    {
      email: email,
    },
    (err, presentUser) => {
      err
        ? res.json('SERVER FAILURE')
        : presentUser ? user.comparePassword(req.body.password) ? res.json(user) : res.json('WRONG PASSWORD') : res.json('USER NOT FOUND');
    }
  );
});
module.exports = router;
