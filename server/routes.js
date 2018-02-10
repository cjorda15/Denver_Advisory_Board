const r = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
module.exports = r;

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});

r.post('/api/v1/image', upload.single('file'), (req, res) => {
  cloudinary.uploader.upload(req.file.path, function(result) {
    console.log(result, 'result');
    res.json(result.secure_url);
  });
});

const account = require('./controllers/account');
r.post('/api/v1/signup', account.signup);
r.post('/api/v1/login', account.login);
r.get('/api/v1/user', account.get);
