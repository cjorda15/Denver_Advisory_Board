const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/cloudinary', (req, res) => {
  req;
});

app.listen(port, () => {
  console.log('we are live..');
});
