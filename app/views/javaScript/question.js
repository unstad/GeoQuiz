/**
 * Created by Lars on 20.04.2017.
 */

var currentLocation;
var nextLocation= "Trondheim";
var questionId = 0;
var questionText;
var answerText;

var updateAll = function() {
    $.get('/api/questions/question/',
        function(question){
            questionId = question._id;
            console.log(questionId);
            questionText = question.question;
            answerText = question.answer;
            currentLocation = nextLocation;
            nextLocation = question.answer_city;
            showText("location", "Du er i " + currentLocation + " og har klart " + (questionId - 1) + " reisemål", 0, 40);
            showText("question",questionText, 0, 20);
            getPolygon();
    });
}
var wikiLink = function(){
    if(currentLocation == undefined) document.getElementById("wiki").href = "https://no.wikipedia.org/wiki/" + "trondheim";
    else                             document.getElementById("wiki").href = "https://no.wikipedia.org/wiki/" + currentLocation;
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

//sounds
var wrongSound = new Audio('sounds/Spitfire.mp3');
var correctSound = new Audio('sounds/correct.mp3');