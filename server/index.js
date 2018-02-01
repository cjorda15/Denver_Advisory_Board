const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const apiRoutes = require('./routes.js');
const config = require('./config').app;
const mongoose = require('mongoose');
const USERS = require('./models/users.js');
const EVENTS = require('./models/events.js');
require('./cleanup.js');
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

mongoose.connect(mongoURL);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

var Users = mongoose.model('USERS', USERS);
var Events = mongoose.model('EVENTS', EVENTS);

// var user = new Users({
//   name: 'roe',
//   age: 13
// });
//
// var event = new Events({
//   name: 'GOOD GOD',
//   info: 'meooooooow'
// });
//
// user.save(function(error) {
//   console.log('SAVED');
//   if (error) {
//     console.error(error);
//   }
// });
//
// event.save(function(error) {
//   console.log('SAVED');
//   if (error) {
//     console.error(error);
//   }
// });
