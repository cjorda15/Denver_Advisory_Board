let jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

module.exports = checkAuth;
