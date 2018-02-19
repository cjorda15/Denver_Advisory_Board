let jwt = require('jsonwebtoken');
let User = require('../../models/users');

const checkAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret', (error, decoded) => {
      if (error) {
        let err = new Error('Something Went Wrong Try To Signin Again');
        err.status = 500;
        next(err);
      } else {
        User.findById({ _id: decoded._id }, (err, user) => {
          if (err) return res.status(500).json(err);
          if (!user) return res.status(401).json({ message: 'User not found' });
          if (!user.admin)
            return res.status(401).json({ message: 'Not an admin' });
          next();
        });
      }
    });
  } else {
    let err = new Error('You must be signed in');
    err.status = 403;
    next(err);
  }
};

module.exports = checkAdmin;
