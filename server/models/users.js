const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USERS = new Schema(
  {
    name: String,
    age: Number
  },
  {
    collection: 'USERS'
  }
);

module.exports = USERS;
