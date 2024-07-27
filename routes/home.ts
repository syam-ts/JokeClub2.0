var express = require('express');
var router = express.Router();
var passport = require('passport');
require('../auth');

router.get('/home', (req, res) => {
    res.render('home');
});
router.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/auth/google' ,(req, res) => {
    passport.authenicate('google', {scope : ['profile', 'email']});
})
 

router.get('/protected' , (req, res) => {
    res.send('Successed');
});


module.exports = router;