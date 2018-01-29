var cloudinary = require('cloudinary');
cloudinary.uploader.upload('./codeSport.png',{public_id: "john_doe_1001"} function(result) {
  console.log(result);
});
