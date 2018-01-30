const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const apiRoutes = require('./routes.js');
const config = require('./config').app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', apiRoutes);
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(config.port, () => {
  console.log('we are live..');
});
