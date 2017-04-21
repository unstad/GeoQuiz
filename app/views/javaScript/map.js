
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


// doing something when click on map
function onMapClick(e){
    console.log(e.latlng);
}

map.on('click', onMapClick);