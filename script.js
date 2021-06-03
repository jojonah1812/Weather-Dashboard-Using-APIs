//--global variables
var userApiKey="5d050cc05f2e639349f41af0545c2086";
// var cityName="Boston"
var currentTemp=""
var currentHumidity=""
var currentWindSpeed=""
var currentUvIndex=""
var longitude=""
var lattitude=""
// DOM element references
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');



//--Geocoding lat & lon
var requestGeo ="https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + ",US+&appid=" + userApiKey;

//--URL needs the concatonated variables to run the request.
"https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&appid=" + userApiKey;


var fetchButton = document.getElementById('fetch-button');

function weatherFetch() {
  // fetch request gets data on requested city
  var requestUrl ="https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&appid=" + userApiKey;
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

function weatherSearch(search) {
  var requestURL="https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + userApiKey;

  fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function (err) {
      console.error(err);
    });
}

fetchButton.addEventListener('click', weatherFetch);





// 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={userApiKey}';
// var requestURL = https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

////Bryan said cut the state - it will run anyways ???
// var stateName = "";
// var stateCode =