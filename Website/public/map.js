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

// const apiKEY = "0S6TC4kGp3KqyL8R7FtKJA5LapeSWEMkA"

// fetchdata();


// // function for Fetching the Data from the API
// async function fetchdata (){
//     const apiURL = 'https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/' + apiKEY + '/message.json';
//     const response = await fetch(apiURL)
//     const data = await response.json().then(function(data){
//         displayinformation(data)
//     });
// }

var redpoint = L.icon({
    iconUrl: './assets/iconposition.svg',
    iconSize:     [20, 20], // size of the icon
});

var data= {
    "response": {
    "feedMessageResponse": {
    "count": 39,
    "feed": {
    "id": "0S6TC4kGp3KqyL8R7FtKJA5LapeSWEMkA",
    "name": "live-flight",
    "description": "live-flight",
    "status": "ACTIVE",
    "usage": 0,
    "daysRange": 7,
    "detailedMessageShown": true,
    "type": "SHARED_PAGE"
    },
    "totalCount": 39,
    "activityCount": 0,
    "messages": {
    "message": [
    {
    "@clientUnixTime": "0",
    "id": 1617857305,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626691061,
    "messageType": "STOP",
    "latitude": 47.66344,
    "longitude": 7.82967,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:37:41+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 398
    },
    {
    "@clientUnixTime": "0",
    "id": 1617857333,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626690761,
    "messageType": "STOP",
    "latitude": 47.6634,
    "longitude": 7.82958,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:32:41+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 0
    },
    {
    "@clientUnixTime": "0",
    "id": 1617854600,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626690427,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.66255,
    "longitude": 7.82548,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:27:07+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1250
    },
    {
    "@clientUnixTime": "0",
    "id": 1617853292,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626690110,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.67023,
    "longitude": 7.85389,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:21:50+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 2612
    },
    {
    "@clientUnixTime": "0",
    "id": 1617851890,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626689790,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.68543,
    "longitude": 7.87971,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:16:30+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 3941
    },
    {
    "@clientUnixTime": "0",
    "id": 1617850594,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626689472,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.69973,
    "longitude": 7.8811,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:11:12+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 5336
    },
    {
    "@clientUnixTime": "0",
    "id": 1617849264,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626689156,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.72401,
    "longitude": 7.87557,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:05:56+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 6986
    },
    {
    "@clientUnixTime": "0",
    "id": 1617847883,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626688842,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.74024,
    "longitude": 7.85516,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T10:00:42+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 8798
    },
    {
    "@clientUnixTime": "0",
    "id": 1617846579,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626688519,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.75269,
    "longitude": 7.82501,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:55:19+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1100
    },
    {
    "@clientUnixTime": "0",
    "id": 1617845483,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626688228,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77483,
    "longitude": 7.76997,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:50:28+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 3734
    },
    {
    "@clientUnixTime": "0",
    "id": 1617844330,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626687954,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.7904,
    "longitude": 7.73418,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:45:54+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 6944
    },
    {
    "@clientUnixTime": "0",
    "id": 1617842948,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626687574,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.79084,
    "longitude": 7.73974,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:39:34+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 4046
    },
    {
    "@clientUnixTime": "0",
    "id": 1617841879,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626687252,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.78862,
    "longitude": 7.77911,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:34:12+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 3821
    },
    {
    "@clientUnixTime": "0",
    "id": 1617840675,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626686936,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.78178,
    "longitude": 7.82523,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:28:56+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1898
    },
    {
    "@clientUnixTime": "0",
    "id": 1617839490,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626686621,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.7784,
    "longitude": 7.87359,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:23:41+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 9974
    },
    {
    "@clientUnixTime": "0",
    "id": 1617838215,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626686299,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77734,
    "longitude": 7.90436,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:18:19+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 8108
    },
    {
    "@clientUnixTime": "0",
    "id": 1617836937,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626685983,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77512,
    "longitude": 7.94623,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:13:03+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 6290
    },
    {
    "@clientUnixTime": "0",
    "id": 1617835768,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626685666,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77352,
    "longitude": 7.97159,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:07:46+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 4409
    },
    {
    "@clientUnixTime": "0",
    "id": 1617835330,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626685554,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77265,
    "longitude": 7.98073,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T09:05:54+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 3764
    },
    {
    "@clientUnixTime": "0",
    "id": 1617833758,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626685118,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77177,
    "longitude": 8.00367,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:58:38+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1361
    },
    {
    "@clientUnixTime": "0",
    "id": 1617832446,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626684726,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77021,
    "longitude": 8.01498,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:52:06+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 9251
    },
    {
    "@clientUnixTime": "0",
    "id": 1617831513,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626684446,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.77231,
    "longitude": 8.00709,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:47:26+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 7793
    },
    {
    "@clientUnixTime": "0",
    "id": 1617830098,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626684090,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.78093,
    "longitude": 7.98088,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:41:30+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 5906
    },
    {
    "@clientUnixTime": "0",
    "id": 1617829435,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626683913,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.79356,
    "longitude": 7.96013,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:38:33+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 5030
    },
    {
    "@clientUnixTime": "0",
    "id": 1617827858,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626683460,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.82365,
    "longitude": 7.88454,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:31:00+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 2867
    },
    {
    "@clientUnixTime": "0",
    "id": 1617826814,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626683144,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.85366,
    "longitude": 7.82345,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:25:44+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1325
    },
    {
    "@clientUnixTime": "0",
    "id": 1617825602,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626682823,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.87211,
    "longitude": 7.78414,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:20:23+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 9866
    },
    {
    "@clientUnixTime": "0",
    "id": 1617821366,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626682507,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.88264,
    "longitude": 7.77051,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:15:07+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 8351
    },
    {
    "@clientUnixTime": "0",
    "id": 1617820198,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626682191,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.90043,
    "longitude": 7.74665,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:09:51+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 6893
    },
    {
    "@clientUnixTime": "0",
    "id": 1617819209,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626681872,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.92059,
    "longitude": 7.7356,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T08:04:32+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 5426
    },
    {
    "@clientUnixTime": "0",
    "id": 1617818125,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626681552,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.9394,
    "longitude": 7.74053,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:59:12+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 4178
    },
    {
    "@clientUnixTime": "0",
    "id": 1617816918,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626681236,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.95609,
    "longitude": 7.76012,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:53:56+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 2870
    },
    {
    "@clientUnixTime": "0",
    "id": 1617815746,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626680920,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.96896,
    "longitude": 7.79405,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:48:40+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 1562
    },
    {
    "@clientUnixTime": "0",
    "id": 1617815775,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626680620,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.97583,
    "longitude": 7.81199,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:43:40+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 0
    },
    {
    "@clientUnixTime": "0",
    "id": 1617808430,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626678939,
    "messageType": "STOP",
    "latitude": 47.97724,
    "longitude": 7.81194,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:15:39+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 278
    },
    {
    "@clientUnixTime": "0",
    "id": 1617807214,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626678621,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.97724,
    "longitude": 7.81197,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:10:21+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 281
    },
    {
    "@clientUnixTime": "0",
    "id": 1617805931,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626678303,
    "messageType": "UNLIMITED-TRACK",
    "latitude": 47.97732,
    "longitude": 7.81194,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T07:05:03+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 254
    },
    {
    "@clientUnixTime": "0",
    "id": 1617804681,
    "messengerId": "0-3195116",
    "messengerName": "THGstratoTrace",
    "unixTime": 1626677987,
    "messageType": "STOP",
    "latitude": 47.97722,
    "longitude": 7.81199,
    "modelId": "SPOTTRACE",
    "showCustomMsg": "Y",
    "dateTime": "2021-07-19T06:59:47+0000",
    "batteryState": "GOOD",
    "hidden": 0,
    "altitude": 278
    }
    ]
    }
    }
    }
    }


    displayinformation(data);

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


