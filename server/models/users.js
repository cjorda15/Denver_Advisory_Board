const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USERS = new Schema(
  {
    info: {
      name: String,
      bio: String,
      joined: String,
      image: String
    },
    organizingEvents: [],
    attendingEvents: []
  },
  {
    collection: 'USERS'
  }
);

module.exports = USERS;
