//lar deg laste riktig db variabel basert på ditt enviroment configuration file
module.exports = require('./env/' + process.env.NODE_ENV + '.js');