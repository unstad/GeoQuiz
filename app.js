var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var game = require('./app/routes/game.server.routes');
//var users = require('./app/routes/users.server.routes');

// Databases to be used:
//User = require('./models/user.server/model.js');     // seems wrong hee=!

var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/app/views')));

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/game', game);
//app.use('/users', users);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


/*// catch 404 and forward to error handler
/* måtte kommentere bort denne for å ikke alltid komme til error-siden
//catch 404 and forward to error handler
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
  res.render('error.ejs', {root: __dirname + "/app/views" });
});*/

mongoose.Promise = global.Promise;  // try to avoid error

// Connect to db
mongoose.connect('mongodb://heroku_npcxr9bk:ieb5lgo7ejufsm557rnife02s4@ds111851.mlab.com:11851/heroku_npcxr9bk');

// Load models
require('./app/models/questions.js');

// Initialize game routes
game(app);

module.exports = app;
