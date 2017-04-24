const Question = require('mongoose').model('Question');

var errorMessage = function(err, res) {
	console.log(err);	
	res.json({'status': 500, 'message': 'error occured: ' + err});
};

// Vis /game siden
exports.render = function(req, res) {
    console.log('game controller');
	res.render("game.ejs", {
      root: __dirname + "/app/views",
	  title: 'GeoQuiz'
	});
};
var id = 0;

exports.question = function(req, res) {
	id++;
	console.log(id);
    return Question.findOne({'_id': id}, function (err, question) {
        if (err) {
            errorMessage(err, res);
            return;
        }
        res.json(question);
    });
};

exports.questionCoordinates = function(req, res) {
    return Question.findOne({'_id': id}, function (err, question) {
        if (err) {
            errorMessage(err, res);
            return;
        }
        res.json(question.geojson_coordinates);
    });
};

// Tar mot svar på spørsmål og marker spørsmålet som besvart hvis svaret er riktig
exports.answerQuestion = function(req, res) {
	var questionId = req.params['questionId'];
	var answerFromUser = req.body['answer'];
	return Question.findOne({'_id': questionId}, function (err, question) {
		if (err) {
			errorMessage(err, res);
			return;
		}

		if (isCorrect) {
            req.nextQuestion();	// TODO funker denne???
            res.json({'status': 200, 'message': 'Answer accepted'});
            question.answered = true;
			return id+=1;
		}
		question.save(function (err) {
			console.log('Failed store question with id ' + questionId);
		});
        res.status(400).json({'status': 400, 'message': 'Incorrect answer'});
	});
};

// Tilbakestill alle spørsmål som har blitt besvart
exports.resetAnswers = function(req, res) {
	id = 0;
};

exports.checkAnswer = function (req, res) {
};