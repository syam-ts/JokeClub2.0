import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieSession from 'cookie-session';

dotenv.config();

const homeRouter = require('../routes/home');
const aboutRouter = require('../routes/about');
const contactRouter = require('../routes/contact');
const authRoute = require('../src/auth');
const session = require('express-session');

const app = express();
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
app.set('views', path.join(__dirname, '../view'));


app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../')));

app.use('/', homeRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
