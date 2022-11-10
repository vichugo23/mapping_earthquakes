// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.2672, -97.7431],
    [43.6777, -79.6248],
    [32.7767, -96.7970]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    opacity: .5,
    dashArray: "10,20",
    weight: 4
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);