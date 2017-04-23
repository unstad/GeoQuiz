module.exports = function (app) {
  const game = require('../controllers/game.server.controller');
  app.get('/', game.render);
    // app.get('/api/questions/next', game.nextQuestion);
    app.get('/api/questions/coors', game.questionCoordinates);
    app.get('/api/questions/question', game.question);
  // app.post('/api/questions/reset', game.resetAnswers);
  // app.post('/api/questions/:questionId/answer', game.answerQuestion);
  // app.post('/api/questions/:checkanswer', game.checkAnswer);
};
