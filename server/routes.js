const router = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const CronJob = require('cron').CronJob;
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
const USERS = require('./models/users.js');

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
  console.log(req.body);
  console.log('!@#$!@#$!@#$');
  res.json('WOOO');
});

module.exports = router;
