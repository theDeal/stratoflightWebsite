// Map Initialisation

var map = L.map('map').setView([40, -15], 3);

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
L.tileLayer(tileURL, {
    attribution: attribution,
    maxZoom: 20,
}).addTo(map);


// Set the view point to auto
map.locate({setView: true, maxZoom: 9});

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

function displayinformation(data) {
    console.log(data);
    console.log(data.response);
    console.log(data.response.feedMessageResponse.count); // displays how many points it shows messages
    console.log(data.response.feedMessageResponse.feed.status); // shows if the Feed is still live
    console.log(data.response.feedMessageResponse.messages);
    const messagearray = data.response.feedMessageResponse.messages.message;
    const lengthofarray = messagearray.length;
    const lastbaterriestatus = messagearray[lengthofarray-1].batteryState;
    console.log(lastbaterriestatus)
// adding all the markers to the Map
    messagearray.forEach(message => {
        const marker = L.marker([message.latitude, message.longitude]).addTo(map);
        const dateandtime = new.Date(message.dateTime);
        marker.bindPopup('<h1 class="title">'+ message.dateTime + '</h1><p class="text">' + message.dateTime +'</p><br><img width="100%" class="image" src="' + item.imageurl + '" /><br><a class="btn" href="' + item.link + '">Website</a><br />');
        
    });
}


    // for ( item of data.response.messages.message) {
    
        
    
    // }