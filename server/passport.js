let passport = require('passport');
let User = require('./models/users');
let LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
let bcrypt = require('bcrypt');

passport.use(
  'linkedin-login',
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_KEY,
      clientSecret: process.env.LINKEDIN_SECRET,
      callbackURL: 'http://localhost:3000/api/v1/linkedin',
      scope: ['r_emailaddress', 'r_basicprofile']
    },
    function(accessToken, refreshToken, profile, done) {
      User.find({ linkedinID: profile.id }, (err, user) => {
        if (err) return done(null, false);
        if (!user) return done(null, false);
        return done(null, user[0]);
      });
    }
  )
);

passport.use(
  'linkedin-signup',
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_KEY,
      clientSecret: process.env.LINKEDIN_SECRET,
      callbackURL: 'http://localhost:3000/api/v1/linkedin/signup',
      scope: ['r_emailaddress', 'r_basicprofile']
    },
    function(accessToken, refreshToken, profile, done) {
      // console.log(profile)

      const user = new User({
        linkedinID: profile.id,
        name: profile.displayName,
        email: profile._json.emailAddress,
        image: { url: profile._json.pictureUrl },
        title: profile._json.headline,
        summary: profile._json.summary
      });

      user.save((error, account) => {
        if (error) {
          return error;
        } else {
          return done(null, account);
        }
      });
    }
  )
);

// exports.login = (req, res) => {
//   const { email, password } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (err) {
//       return res.status(500).json({ message: 'Something went wrong' });
//     }
//     if (!user) {
//       res.status(401).json({ message: 'User not found' });
//     } else {
//       if (!user.comparePassword(password)) {
//         res.status(401).json({ message: 'Bad Password' });
//       } else {
//         user.password = undefined;
//         let token = jwt.sign({ _id: user._id }, 'secret');
//         res
//           .cookie('jwt', token, { maxage: 900000, httpOnly: true })
//           .json({ message: 'Success', user: user });
//       }
//     }
//   });
// };
