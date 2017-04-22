var pip = require('point-in-polygon');
// const Question = require('mongoose').model('Question');

var answerFromUser = [1.5, 1.5];

/*exports.questionCoordinates = function(req, res) {
    return Question.findOne({'answered': false}, function (err, question) {
        if (err) {
            errorMessage(err, res);
            return;
        }

        console.log(pip(answerFromUser, res.json(question.geojson_coordinates)));
    });
};*/
var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
var point = [1.5, 1.5];


console.log(pip(point, polygon));