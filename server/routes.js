const router = require('express').Router();
const cloudinary = require('cloudinary');
const config = require('./config').cloudinary;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const CronJob = require('cron').CronJob;
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');

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

new CronJob(
  '00 00 00 * * 1-5',
  function() {
    deleteFolderRecursive(temp_folder_path);
  },
  null,
  true,
  'America/Denver'
);

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index) {
      var curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
        fs.rmdirSync(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
  }
};

module.exports = router;
