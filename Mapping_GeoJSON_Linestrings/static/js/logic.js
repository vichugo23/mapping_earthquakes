// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});
//ACCESS DARK VIEW TILE LAYER THAT WILL BE AN OPTION FOR OUR MAP
let satilliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});
// CREATE A BASE LAYER THAT HOLDS BOTH MAPS.
let baseMaps = {
    "Streets": streets,
    "Satillite Streets": satilliteStreets
};
//CREATE A MAP OBJECT WITH CENTER, ZOOM LEVEL AND DEFAULT LAYER.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});
//PASS OUR MAP LAYERS INTO OUR LAYERS CONTROL AND ADD THE LAYERS CONTROL TO THE MAP.
L.control.layers(baseMaps).addTo(map);
// ACCESSING THE TORONTO AIRLINE ROUTES GEOJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/vichugo23/mapping_earthquakes/main/torontoNeighborhoods.json";
// Create a style for the lines.
let myStyle = {
    color: "blue",
    fillColor: "yellow",
    weight: 1
}
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(features, layer) {
        console.log(layer);
        layer.bindPopup("<h3> Neighborhood: "+ features.properties.AREA_NAME+"<h3>")
    }
  }).addTo(map);
});


