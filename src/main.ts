import * as express from 'express';
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/about', function (req, res) {
    res.render('about');
});

export default router;
