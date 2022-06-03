var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Express',
      userName: 'Laila'
    }
  );
}


/* GET About page. 
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', userName: 'Laila' });
});

/* GET Projects page. 
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', userName: 'Laila' });
});*/


module.exports = router;
