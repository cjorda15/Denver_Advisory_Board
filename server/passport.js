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
      callbackURL: process.env.LINKEDIN_LOGIN_CALLBACK,
      scope: ['r_emailaddress', 'r_basicprofile']
    },
    function(accessToken, refreshToken, profile, done) {
      User.find({ linkedinID: profile.id }, (err, user) => {
        if (err) return done(err, false);
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
      callbackURL: process.env.LINKEDIN_SIGNUP_CALLBACK,
      scope: ['r_emailaddress', 'r_basicprofile']
    },
    function(accessToken, refreshToken, profile, done) {

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
          return done(error, false);
        } else {
          return done(null, account);
        }
      });
    }
  )
);
