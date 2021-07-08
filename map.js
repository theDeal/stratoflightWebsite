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

async function fetchdata (){
    const apiURL = 'https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/' + apiKEY + '/message.json';
    const response = await fetch(apiURL)
    const data = await response.json().then(function(data){
        console.log(data)
    });
}


    // for ( item of data.response.messages.message) {
    
        
    //     const marker = L.marker([item.latitude, item.longitude]).addTo(map);
    
    //     // marker.bindPopup('<h1 class="title">'+ item.name + '</h1><p class="text">' + item.description +'</p><br><img width="100%" class="image" src="' + item.imageurl + '" /><br><a class="btn" href="' + item.link + '">Website</a><br />');
    // }