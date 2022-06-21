//Importing Modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');*/
let flash = require('connect-flash');

// modules for authentication
let passport = require('passport');
let session = require('express-session');
/*//Database setup
let mongoose = require('mongoose');
let dbURI = require('./db');
// Connect to the Database
mongoose.connect(dbURI.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});*/



var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var aboutRouter = require('../routes/about');
var contactRouter = require('../routes/contact');
var projectsRouter = require('../routes/projects');
var servicesRouter = require('../routes/services');
var inventoryRouter = require('../routes/inventory');
var businessRouter = require('../routes/business');

//Instantiate Express
//var app = express();
let app = express();

//setup express session
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));


// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../routes')));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/inventory', inventoryRouter);
app.use('/business', businessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
