/**
 * Created by Lars on 20.04.2017.
 */

var currentLocation = "Trondheim";
var questionId;
var questionText;
var answerGeojson;
var answerText;

var updateLocation = function () {
    document.getElementById("location").innerHTML = "Du er her: " + currentLocation;
}

var showText = function (text, index, interval) {
    if(index < text.length){
        index++;
        document.getElementById("question").innerHTML = text.substr(0,index);
        setTimeout(function () {
            showText(text, index, interval);
        }, interval);
    }
}
var snd = new Audio('sounds/Spitfire.mp3');
var correctSound = new Audio('sounds/correct.mp3');