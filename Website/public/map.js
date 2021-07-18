// Map Initialisation

var map = L.map('map', {
    minZoom: 2,
    maxZoom: 19
}).setView([40, -15], 3);

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileURL, {
    attribution: attribution,
    maxZoom: 20,
}).addTo(map);


// Set the view point to auto
// map.locate({setView: true, maxZoom: 9});

// Fetching data from API

const apiKEY = "0sJDTpkjL9xgHnZZTT9vajCQfnPnlvTIx"

fetchdata();


// function for Fetching the Data from the API
async function fetchdata (){
    const apiURL = 'https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/' + apiKEY + '/message.json';
    const response = await fetch(apiURL)
    const data = await response.json().then(function(data){
        displayinformation(data)
    });
}

var redpoint = L.icon({
    iconUrl: './assets/iconposition.svg',
    iconSize:     [20, 20], // size of the icon
});

function displayinformation(data) {
    const messagearray = data.response.feedMessageResponse.messages.message;
    const lengthofarray = messagearray.length;
    const lastbaterriestatus = messagearray[lengthofarray-1].batteryState;
    document.getElementById("battery").innerHTML = lastbaterriestatus;
    // Creating 3d Array with all Points
    var latlngs = [];

    // adding all the markers to the Map
    messagearray.forEach((message, index) => {
        latlngs.push([message.latitude, message.longitude]);
        const marker = L.marker([message.latitude, message.longitude], {icon: redpoint}).addTo(map);
        // format of date and time "2021-07-08T10:22:42+0000"
        var dateandtime = new Date(message.dateTime);
        var dateandtimegemany = dateandtime.toLocaleString('de-DE', {
            weekday: 'short', // long, short, narrow
            day: 'numeric', // numeric, 2-digit
            year: 'numeric', // numeric, 2-digit
            month: 'long', // numeric, 2-digit, long, short, narrow
            hour: 'numeric', // numeric, 2-digit
            minute: 'numeric', // numeric, 2-digit
            second: 'numeric', // numeric, 2-digit
        })
        marker.bindPopup('<h1 class="title">Punkt '+ index + '</h1><p class="text"></p> Hier wurde der Ballon um ' + dateandtimegemany +' Geortet.<br> Die Batterie hatte einen Status von: ' + message.batteryState);
        
    });

    // Show the Line with the Points

    var polygon = L.polyline(latlngs, {color: 'red'}).addTo(map);

    // zoom the map to the polygon
    map.fitBounds(polygon.getBounds());
}


