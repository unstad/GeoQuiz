// Katharina: Er dette nødvendig? Virker som dette er kombinasjon av server.js og config/express.js
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var game = require('./app/routes/game.server.routes');
var users = require('./app/routes/users.server.routes');

mongoose.Promise = global.Promise;  // try to avoid error

// Connect to db
mongoose.connect('mongodb://heroku_4bpbxhwb:pkvY4zQ1QFBzo4Bfaz95gn9rLP7QOkDz@ds153400.mlab.com:53400/heroku_4bpbxhwb');

// Databases to be used:
User = require('./models/user.server/model.js');     // seems wrong hee=!

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/game', game);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
