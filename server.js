process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

// const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();
app.listen(3000);

//G: prøver ut noe
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://heroku_4bpbxhwb:pkvY4zQ1QFBzo4Bfaz95gn9rLP7QOkDz@ds153400.mlab.com:53400/heroku_4bpbxhwb')


module.exports = app;
console.log('Server running at http://localhost:3000/');