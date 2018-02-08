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
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

router.post('/signup', (req, res) => {
  let { password, email } = req.body;
  password = bcrypt.hashSync(password, 10);
  const user = new User({
    password: password,
    email: email
  });

  user.save((error, user) => {
    if (error) {
      res.json({ message: 'Username Taken' });
      return;
    } else {
      user.password = undefined;
      let token = jwt.sign(
        {  _id: user._id },
        'secret'
      );
      res
        .cookie('jwt', token, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true
        })
        .json({ message: 'Success' });
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
    if (!user) {
      res.status(401).json({ message: 'User not found' });
    } else {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Bad Password.' });
      } else {
        user.password = undefined;
        let token = jwt.sign(
          {  _id: user._id },
          'secret'
        );
        res
          .cookie('jwt', token, { maxage: 900000, httpOnly: true })
          .json({ message: 'Success' });
      }
    }
  });
});
module.exports = router;
