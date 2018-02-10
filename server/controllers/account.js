const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  let { password, email } = req.body;
  password = bcrypt.hashSync(password, 10);
  const user = new User({
    password: password,
    email: email
  });

  user.save((error, user) => {
    if (error) {
      res.json({ message: 'Username Taken' });
      return;
    } else {
      user.password = undefined;
      let token = jwt.sign({ _id: user._id }, 'secret');
      res
        .cookie('jwt', token, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true
        })
        .json({ message: 'Success' });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
    if (!user) {
      res.status(401).json({ message: 'User not found' });
    } else {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Bad Password' });
      } else {
        user.password = undefined;
        let token = jwt.sign({ _id: user._id }, 'secret');
        res
          .cookie('jwt', token, { maxage: 900000, httpOnly: true })
          .json({ message: 'Success' });
      }
    }
  });
};

exports.get = (req, res) => {
  let token = req.cookies.jwt;
  jwt.verify(token, 'secret', (error, decoded) => {
    if (error) return res.status(500).send(error);
    let { _id, name, email } = decoded;
    User.findOne({ _id: _id }, (err, user) => {
      if (err) return res.status(err);
      user.password = undefined;
      res.json(user);
    });
  });
};
