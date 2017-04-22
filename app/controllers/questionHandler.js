/**
 * Created by GalinaJonat on 22/04/17.
 */

// route to quiz
var Quiz = require('./app/models/quiz');


// how to get question for certain id? can I use Quiz.find(_id == x) to find certain question

var questionText = Quiz.getQuestion();

var answer_city = Quiz.getAnswerCity();

var answerPoly = L.geoJson(Quiz.getPolygon());

// var clickedPoint = new Array // how to get that one form map.js????

var checkPoint = this; //???

// I think, I want this one in map
if (leafletPip.pointInLayer(checkPoint, answerPoly) !== [])
    map.popup() // i kartet eller utenfor? Hva er enklest?
    // update: Du er i (...)

else
    map.log("wrong answer")// popup/alert feil svar
