let User = require('../../models/users');

const checkAdmin = (req, res, next) => {
  User.findById({ _id: req.user._id }, (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(401).json({ message: 'User not found' });
    if (!user.admin) return res.status(401).json({ message: 'Not an admin' });
    next();
  });
};

module.exports = checkAdmin;
