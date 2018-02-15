const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: String,
  password: { type: String, required: true },
  email: { type: String, unique: true },
  title: String,
  organization: String,
  summary: String,
  image: String,
  organizingEvents: [],
  attendingEvents: []
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
