const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

exports.signup = (req, res) => {
  let { password, email } = req.body;
  if (!password) return res.json({ message: 'Must include password.' })
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
        .json({ message: 'Success', user: user });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
    if (!user) {
      res.status(401).json({ message: 'User not found' });
    } else {
      if (!user.comparePassword(password)) {
        res.status(401).json({ message: 'Bad Password' });
      } else {
        user.password = undefined;
        let token = jwt.sign({ _id: user._id }, 'secret');
        res
          .cookie('jwt', token, { maxage: 900000, httpOnly: true })
          .json({ message: 'Success', user: user });
      }
    }
  });
};

exports.get = (req, res) => {
  console.log(req.user)
  if (!req.user) return res.status(403).json({ name: 'JsonWebTokenError'})
    User.findOne({ _id: req.user.id }, (err, user) => {
      if (err) return res.status(500).json({message: err});
      if (!user) return res.status(404).json({message: 'Not found.'})
      user.password = undefined 
      res.json(user);
    });
};

exports.image = (req, res) => {
  let { id, image } = req.body;
  let query = { _id: id };
  let update = { image: image };
  User.findOneAndUpdate(query, update, (err, doc) => {
    if (err) {
      res.json('error', err);
    }

    res.json('Success');
  });
};

exports.update = (req, res) => {
  let { name, title, organization, summary, id } = req.body;
  let query = { _id: id };
  let update = {
    name: name,
    title: title,
    organization: organization,
    summary: summary
  };
  User.findOneAndUpdate(query, update, { new: true }, (err, doc) => {
    if (err) {
      res.json({ message: 'error', error: err });
    }
    doc.password = undefined 
    res.json({ message: 'Success', user: doc });
  });
};
