const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const eventSchema = new Schema({
    title:     { type: String, required: true },
    summary:   { type: String },
    location:  { type: String,  required: true },
    date:      { type: String, required: true },
    time:      { type: String, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    participants: [ 
      { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
    ],
    images: []
});

module.exports = mongoose.model('Event', eventSchema)
