var GoogleStrategy = require("passport-google-oauth20").Strategy;
var passport = require("passport");
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
}, function (accessToken, refreshToken, profile, callback) {
    console.log('Profile Data');
    console.log(profile);
    callback(null, profile);
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
