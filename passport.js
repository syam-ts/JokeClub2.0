const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
  // User authentication logic here
  return cb(null, profile);
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});