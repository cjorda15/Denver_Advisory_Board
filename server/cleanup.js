const CronJob = require('cron').CronJob;
const path = require('path');
const temp_folder_path = path.join(__dirname, '../uploads');
const fs = require('fs');

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
