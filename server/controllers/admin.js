let User = require('../models/users')

exports.login = (req, res, next) => {
  if (!req.user) return res.render('adminLogin', {})
  User.findById({ _id: req.user._id }, (err, user) => {
    if (err) return next(err)
    if (!user) return res.render('adminLogin', {})
    if (!user.admin) return res.render('adminLogin', {})
    res.redirect('/admin/dashboard')
  });
}

exports.dashboard = (req, res, next) => {
  res.render('adminDash', {})
}