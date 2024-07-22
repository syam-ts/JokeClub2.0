"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/home', function (req, res) {
    res.render('home');
});
router.get('/login', function (req, res) {
    res.render('login');
});
router.get('/about', function (req, res) {
    res.render('about');
});
router.get('/about', function (req, res) {
    res.render('about');
});
exports.default = router;
