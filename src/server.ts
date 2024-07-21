import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import * as dotenv from 'dotenv';
import passport from 'passport';
import cookieSession from 'cookie-session';

dotenv.config();

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

const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.cookies); 

  next();
};

app.use(myMiddleware);

app.get('/', (req: Request, res: Response) => {
  res.render('home');
});

app.get('/home', (req: Request, res: Response) => {
  res.render('home');
});

app.get('/about', (req: Request, res: Response) => {
  res.render('about');
});

app.get('/contact', (req: Request, res: Response) => {
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
