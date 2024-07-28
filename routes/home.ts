var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../auth');
var app = express();
var session = require('express-session');
require('dotenv').config();


app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
};


router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/auth/google',
    passport.authenticate('google', { scope: [ 'email', 'profile' ] }
  ));

  router.get('/auth/google/callback',
    passport.authenticate( 'google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/google/failure'
    })
  );

router.get('/protected' , (req, res) => {
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


module.exports = router;