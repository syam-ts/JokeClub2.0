import express from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import passport from 'passport';
import cookieSession from 'cookie-session';

dotenv.config();

const homeRouter = require('../routes/home');
const projectsRouter = require('../routes/projects');
const aboutRouter = require('../routes/about');
const contactRouter = require('../routes/contact');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../view'));

app.use(
  cookieSession({
    name: 'session',
    keys: ['randomKey'],
    maxAge: 24 * 60 * 60 * 1000 
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoute = require('../src/auth');
app.use('/auth', authRoute);

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../')));


app.use('/',homeRouter)
app.use('/',aboutRouter)
app.use('/',contactRouter)
app.use('/',projectsRouter)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
