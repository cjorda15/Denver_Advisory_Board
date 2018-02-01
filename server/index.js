const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const apiRoutes = require('./routes.js');
const config = require('./config').app;
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL || process.env.localMongo;

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

var Schema = mongoose.Schema;

var Users = new Schema(
  {
    name: String,
    age: Number
  },
  {
    collection: 'collectionName'
  }
);

mongoose.connect(mongoURL);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(db, '!!');
  console.log('connected');
});
//

var Users = mongoose.model('Users', Users);

var Chris = new Users({
  name: 'ganadsfasdfnon',
  age: 202304023940,
  fat: true
});

Chris.save(function(error) {
  console.log('SAVED');
  if (error) {
    console.error(error);
  }
});
