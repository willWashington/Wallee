
function drawMap(coords) {
//var mymap = L.map('mapid').setView([34.7465, -92.2896], 5);
var mymap = L.map('mapid').setView([coords.lat, coords.long], 5);

//Build Map Tile
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid2lsbHdhc2hpbmd0b24iLCJhIjoiY2p3emRxMWE0MWU1ZTN6bGZwZ2gwOXNpNyJ9.aHQzbfT2MdfqZbmezxuZFA'
    //https://account.mapbox.com/access-tokens/
}).addTo(mymap);

var marker = L.marker([coords.lat, coords.long]).addTo(mymap); //mark my home town

mymap.addLayer(
    new L.TileLayer(
            "http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=0a3f9d42c2422fd058ffc13886c2cc14")); //add OWM precipitation layer

}