"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
const homeRouter = require('../routes/home');
const aboutRouter = require('../routes/about');
const contactRouter = require('../routes/contact');
const authRoute = require('../src/auth');
const session = require('express-session');
const app = (0, express_1.default)();
var port = 3000;
app.use(session({
    secret: 'randomKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));
require('./passport-setup');
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../view'));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/auth', authRoute);
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
