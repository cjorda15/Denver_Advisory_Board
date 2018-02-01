const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EVENTS = new Schema(
  {
    name: String,
    info: String
  },
  {
    collection: 'EVENTS'
  }
);

module.exports = EVENTS;
