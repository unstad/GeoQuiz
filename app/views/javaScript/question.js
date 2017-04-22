/**
 * Created by Lars on 20.04.2017.
 */

var getQuestion = function(index) {
    //give me question nr 5
    var id = index;
    var question = "question";
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
var snd = new Audio('sounds/spitfire.mp3');
var correctSound = new Audio('sounds/correct.mp3');