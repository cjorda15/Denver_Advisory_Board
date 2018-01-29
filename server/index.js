const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.ClOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_Key,
  api_secret: process.env.CLOUDINARY_SECRET_API_Key
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  console.log('!!!!!!!!!');
  console.log(cloudinary);
  console.log(process.env.ClOUDINARY_NAME);
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/cloudinary', (req, res) => {
  req;
});

app.listen(port, () => {
  console.log(cloudinary);
  console.log(process.env.ClOUDINARY_NAME);
});
