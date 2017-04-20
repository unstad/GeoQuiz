/**
 * Created by Lars on 20.04.2017.
 */
var showText = function (index, interval) {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
        "labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
        "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui " +
        "officia deserunt mollit anim id est laborum.";
    if(index < text.length){
        index++;
        document.getElementById("question").innerHTML = text.substr(0,index);
        setTimeout(function () {
            showText(index, interval);
        }, interval);
    }
}