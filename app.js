var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var game = require('./app/routes/game.server.routes');


var Quiz = require('./app/models/quizSchema');

var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/app/views')));

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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

// Database setup
mongoose.Promise = global.Promise;  // try to avoid error

// Connect to db
mongoose.connect('mongodb://heroku_npcxr9bk:ieb5lgo7ejufsm557rnife02s4@ds111851.mlab.com:11851/heroku_npcxr9bk');

// Load models
require('./app/models/questions.js');


// accessing database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log("connected")});

// Initialize game routes
game(app);

module.exports = app;
