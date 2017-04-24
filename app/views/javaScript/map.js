//initialize map with given center and zoom
const map = L.map('mapid').setView(L.latLng(63.42239, 10.42993), 13);

//creating tile layer and adding it to map
const tilelayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ3ZqIiwiYSI6ImNpeWcwcnhxajAwMWUycW40eWJ3NXdpNGgifQ.73hb0hSrGL22ikJjEfWtJQ'
});

map.addLayer(tilelayer);

//geocoder allowing for search
var osmGeocoder = new L.Control.OSMGeocoder();

map.addControl(osmGeocoder);

var answerPolygon="";

var getPolygon = function(){
    $.get("/api/questions/coors", function(data){
        answerPolygon = L.geoJSON({
            "type": "GeometryCollection",
            "geometries": [data[0].geometries[0]]
        });
        console.log(answerPolygon);
    });
}

var allMarkers = new L.featureGroup();

// reisen starter i Trondheim
const trondheim=[63.41988, 10.43008];
var startPoint = L.latLng(trondheim);
L.marker(startPoint, {icon: L.icon({
    iconUrl: '../../img/Ski_House',
    iconSize: [38, 38]})}).addTo(map);
L.marker(startPoint).addTo(allMarkers);
var polyline = L.polyline([startPoint], {color: '#0b52ff'});

polyline.addTo(map);

// checking if answer area is clicked correctly
var isCorrect=false; //Katharina
function onMapClick(e) {
    var clickedPoint = e.latlng;
    if (answerPolygon.getBounds().contains(clickedPoint)) {
        correctSound.play();
        alert("Da har du reist til riktig sted! Gratulerer!");
        console.log(answerText);
        polyline.addLatLng(clickedPoint);
        L.marker(clickedPoint, {icon: L.icon({
            iconUrl: '../../img/koffert.png',
            iconSize: [38, 38]})}).addTo(map); // marker som etter hvert skal ha samlet inn alle stedene vi har vært innom :)
        L.marker(clickedPoint).addTo(allMarkers);
        updateAll();

    }
    else {
         wrongSound.play();
        alert("Du har nok reist feil. Prøv på nytt!");
    }
}
map.on('click', onMapClick);

var zoomOut = function(){
    map.fitBounds(allMarkers.getBounds());
}