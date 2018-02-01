const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EVENTS = new Schema(
  {
    name: String,
    info: String,
    organizer: String,
    participants: [],
    images: []
  },
  {
    collection: 'EVENTS'
  }
);

module.exports = EVENTS;
