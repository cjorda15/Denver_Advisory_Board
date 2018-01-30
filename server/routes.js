const router = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret
});

router.post('/image', multipartMiddleware, (req, res) => {
  cloudinary.uploader.upload(req.files.image.path, function(result) {
    console.log(result, 'result');
  });
});

module.exports = router;

// const router = require('express').Router();
// const cloudinary = require('cloudinary');
// const config = require('./config').cloudinary;
// const multipart = require('connect-multiparty');
// const multipartMiddleware = multipart();
//
// const multer = require('multer');
// const upload = multer();
//
// cloudinary.config({
//   cloud_name: config.cloud_name,
//   api_key: config.api_key,
//   api_secret: config.api_secret
// });
//
// router.post('/image', upload.any(), (req, res) => {
//   console.log(req.files, '!@#!@#!@#');
//   cloudinary.uploader.upload(req.files, function(result) {
//     console.log(result, 'result');
//   });
// });
//
// module.exports = router;
