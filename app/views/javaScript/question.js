/**
 * Created by Lars on 20.04.2017.
 */

var currentLocation = "Trondheim";
var nextLocation;
var questionId = 0;
var questionText;
var answerGeojson;
var answerText;

var updateAll = function() {
    questionId++;
    console.log(questionId);
    $.get('/api/questions/question/',
        function(question){
            questionId = question._id;
            console.log(questionId);
            questionText = question.question;
            answerGeojson = question.geojson_coordinates;
            answerText = question.answer;
            nextLocation = question.answer_city;
            showText("location", "Du er her: " + currentLocation, 0, 40);
            showText("question",questionText, 0, 5);
            getPolygon();
    });
}

var showText = function (target, text, index, interval) {
    if(index < text.length){
        index++;
        document.getElementById(target).innerHTML = text.substr(0,index);
        setTimeout(function () {
            showText(target, text, index, interval);
        }, interval);
    }
}
var snd = new Audio('sounds/Spitfire.mp3');
var correctSound = new Audio('sounds/correct.mp3');