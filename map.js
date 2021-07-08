var map = L.map('map').setView([40, -15], 3);

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileURL, {
    attribution: attribution,
    maxZoom: 20,
}).addTo(map);


// Set the view point to auto
map.locate({setView: true, maxZoom: 9});
