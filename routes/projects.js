var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('projects', { 
    title: 'My Projects',
    userName: 'Laila' });
});

module.exports = router;