module.exports = function (app) {
  const game = require('../controllers/game.server.controller');
  app.get('/game', game.render);
};
