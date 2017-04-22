module.exports = function (app) {
  const game = require('../controllers/game.server.controller');
  app.get('/game', game.render);
  app.get('/api/questions/next', game.nextQuestion);
  app.post('/api/questions/reset', game.resetAnswers);
  app.post('/api/questions/:questionId/answer', game.answerQuestion);
};
