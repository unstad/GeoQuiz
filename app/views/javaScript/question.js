/**
 * Created by Lars on 20.04.2017.
 */
var showText = function (index, interval) {
    var text = "Du inviteres på restaurant for å spise \"blainnabaill\". Men når " +
        "kelneren kommer med en tallerken til deg, er det ikke mat på den, men " +
        "derimot en konvolutt. <br><br> Utenpå konvolutten er det et bilde som v" +
        "iser en naken mann og en naken kvinne med fikenblad som lendeklede." +
        " De har hver sin treklubbe på skulderen og står på hver side av et " +
        "skjold som har tegning av et tårn omgitt av en mur. Rundt skjoldet" +
        " er det seks roser, tre hvite og tre røde. På brevet i konvolutten" +
        " står det: <br><br> \"Kjære skattejeger! <br><br> Reis til den by der vår norske kollega " +
        "vant heder, ære og metall av edleste slag i en begivenhet som for andre " +
        "gang i historien foregikk utenom en hovedstad! <br><br> Hilsen Daley Thompson, " +
        "Dan O'Brien og Ashton Eaton.\"";
    if(index < text.length){
        index++;
        document.getElementById("question").innerHTML = text.substr(0,index);
        setTimeout(function () {
            showText(index, interval);
        }, interval);
    }
}
var snd = new Audio('sounds/spitfire.mp3');
var correctSound = new Audio('sounds/correct.mp3');