var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../src/auth');
var app = express();
var session = require('express-session');
require('dotenv').config();


app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
};

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.render('home', {
      userName : '', 
      logHref : '/logout',
      log : 'Login'
    });
  });
});

router.get('/home', (req, res) => {
    res.render('home',{
      userName : '',
      logHref : '/#',
      log: 'Login'
    });
});

router.get('/auth/google',passport.authenticate('google',
   { scope: [ 'email', 'profile' ] })
);

  router.get('/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    })
  );

router.get('/protected' , isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});
app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});


router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
  });


  var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(new GoogleStrategy({
    clientID: 'GOOGLE_CLIENT_ID',
    clientSecret: 'GOOGLE_CLIENT_SECRET',
    callbackURL: "http://localhost:0/auth/google/callback",
    passReqToCallback: true,
  },
  function(request, accessToken, refreshToken, profile, done) {
    request.session.regenerate(function(err) {
      if (err) {
        return done(err);
      }
      return done(null, profile);
    });
  }));

module.exports = router;