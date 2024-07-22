"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var dotenv = require("dotenv");
var passport_1 = require("passport");
var cookie_session_1 = require("cookie-session");
dotenv.config();
var homeRouter = require('../routes/home');
var projectsRouter = require('../routes/projects');
var aboutRouter = require('../routes/about');
var contactRouter = require('../routes/contact');
var app = (0, express_1.default)();
var port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../view'));
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['randomKey'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
var authRoute = require('../src/auth');
app.use('/auth', authRoute);
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);
app.use('/', projectsRouter);
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
