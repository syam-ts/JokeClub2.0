var router = require('express').Router();
var passport = require('passport');

router.get('/login/success', (req, res) => {
  if (req.user) {
    const userName = req.user.given_name;
    res.render('home', { userName: userName,logHref : '/auth/google', log : 'Logout' });
    console.log(req.user)
  } else {
    res.status(403).json({ error: true, message: 'Not Authorized' });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({ error: true, message: 'Log in failure' });
});

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login/failed',
  }),
  (req, res) => {
    console.log(req.session.passport.user.given_name)
    const userName = req.session.passport ? req.session.passport.user.given_name : '';
    res.render('home',{
      userName : userName,
      log : ''
    });
    console.log('User loggedIn')   
  }
);


module.exports = router;
