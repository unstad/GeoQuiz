module.exports = function (app) {
  const game = require('../controllers/game.server.controller');

  app.get('/', game.render);
  
  app.get('/api/questions/coors', game.questionCoordinates);
  app.get('/api/questions/question', game.question);

  app.post('/api/questions/reset', game.resetAnswers);
};
