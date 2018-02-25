let passport = require('passport')
let User = require('./models/users')
let LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


passport.use('linkedin-login', new LinkedInStrategy({
  clientID: process.env.LINKEDIN_KEY,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: "http://localhost:3000/api/v1/linkedin",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function (accessToken, refreshToken, profile, done) {
    User.find({linkedinID: profile.id}, (err, user) => {
      if (err) return done(null, false)
      if (!user) return done(null, false)
      return done(null, user[0]);
    })
}));


passport.use('linkedin-signup', new LinkedInStrategy({
  clientID: process.env.LINKEDIN_KEY,
  clientSecret: process.env.LINKEDIN_SECRET,
  callbackURL: "http://localhost:3000/api/v1/linkedin/signup",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function (accessToken, refreshToken, profile, done) {
      // console.log(profile)

      const user = new User({
        linkedinID: profile.id,
        name: profile.displayName,
        email: profile._json.emailAddress,
        image: profile._json.pictureUrl,
        title: profile._json.headline,
        summary: profile._json.summary
      });

      user.save((error, account) => {
        if (error) {
          return (error)
        } else {
          return done(null, account);
        }
      })
}));

// const user = new User({
//  linkedinID: profile.id,
//  name: profile.displayName,
//  email: profile._json.emailAddress,
//  image: profile._json.pictureUrl,
//  title: profile._json.headline,
//  summary: profile._json.summary
// });

// user.save((error, user) => {
//   if (error) {
//     res.json({ message: 'Username Taken' });
//     return;
//   } else {
//     user.password = undefined;
//     let token = jwt.sign({ _id: user._id }, 'secret');
//     res
//       .cookie('jwt', token, {
//         expires: new Date(Date.now() + 900000),
//         httpOnly: true
//       })
//       .json({ message: 'Success', user: user });
//   }
// });