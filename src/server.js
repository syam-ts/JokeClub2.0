var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
require('dotenv').config();
var passport = require('passport');
var passportStartegy = require('../passport');
var cookieSession = require('cookie-session');
var authRoute = require('../src/auth');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../view'));
app.use(cookieSession({
    name: "session",
    keys: ["randomKey"],
    maxAge: 24 * 60 * 60 * 100,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoute);
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../')));
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/home', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
