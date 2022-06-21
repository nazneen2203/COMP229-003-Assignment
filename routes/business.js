var express = require('express');
var router = express.Router();
//let mongoose = require('mongoose');

// Connect to our model
let businessController = require('../controller/business');
let Business = require('../models/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}


/* GET users listing. */
router.get('/list', businessController.list);

/* Update. */
router.get('/edit/:id', requireAuth, businessController.displayEditPage);
router.post('/edit/:id', requireAuth, businessController.processEditPage);

/* Delete */
router.get('/delete/:id', requireAuth, businessController.performDelete);

/* Create */
router.get('/add', requireAuth, businessController.displayAddPage);
router.post('/add', requireAuth, businessController.processAddPage);
module.exports = router; 