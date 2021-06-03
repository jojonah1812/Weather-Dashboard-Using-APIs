//--global variables
var userApiKey = '5d050cc05f2e639349f41af0545c2086';

var cityName = ""
var stateName = ""
var stateCode = "US-"+ stateName
var currentTemp
var currentHumidity
var cuurentWindSpeed
var currentUvIndex
var longitude
var lattitude

//--URL needs the concatonated variables to run the request.
"https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&appid=" + userApiKey;


var fetchButton = document.getElementById('fetch-button');

function weatherFetch() {
  // fetch request gets data on requested city
  //state code = 'US-__"  https://en.wikipedia.org/wiki/ISO_3166-2:US
 
    var requestUrl ="https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&appid=" + userApiKey;
    // var requestURL = https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
 

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
}
//-- API call
fetchButton.addEventListener('click', weatherFetch);

// 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={userApiKey}';