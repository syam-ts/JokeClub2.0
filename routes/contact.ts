var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;