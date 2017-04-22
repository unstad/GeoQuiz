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

// Finn det første spørsmålet som ikke har noe svar
exports.nextQuestion = function(req, res) {
	return Question.findOne({'answered': false}, function (err, question) {
		if (err) {
			errorMessage(err, res);
			return;
		}
		res.json(question.question);
	});
};

exports.questionCoordinates = function(req, res) {
    return Question.findOne({'answered': false}, function (err, question) {
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
		// Instead of check text answer, check coordinates
		/*
		var lat = answer[0];
		var lon = answer[1];
		*/
		if (question.answer_city !== answerFromUser) {
			res.status(400).json({'status': 400, 'message': 'Incorrect answer'});
			return;
		}
		question.answered = true;
		question.save(function (err) {
			console.log('Failed store question with id ' + questionId);
		});
		res.json({'status': 200, 'message': 'Answer accepted'});
	});
};

// Tilbakestill alle spørsmål som har blitt besvart
exports.resetAnswers = function(req, res) {
	return Question.find({"answered": true}, function (err, questions) {
		if (err) {
			errorMessage(err, res);
			return;
		}
		questions.forEach(function (question) {
			question.answered = false;
			question.save(function (err) {
				console.log('Failed reset question with id ' + question._id);
			});
		});
		res.json({'status': 200, 'message': 'All questions have been reset'});
	});	
};
