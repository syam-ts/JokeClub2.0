var express = require('express');
var router = express.Router();

router.get('/projects', (req, res) => {
    res.render('projects');
});


module.exports = router;