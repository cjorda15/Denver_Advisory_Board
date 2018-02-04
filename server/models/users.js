const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USERS = new Schema(
  {
    name: String,
    password: String,
    email: String,
    bio: String,
    image: String,
    organizingEvents: [],
    attendingEvents: []
  },
  { collection: 'USERS' }
);

module.exports = USERS;
