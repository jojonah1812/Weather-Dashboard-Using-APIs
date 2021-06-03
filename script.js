//--global variables
var userApiKey = '5d050cc05f2e639349f41af0545c2086';

var cityName = "Beaver Dam"
var stateName = "WI"
var stateCode = "US-"+ stateName
var fetchButton = document.getElementById('fetch-button');

function weatherFetch() {
  // fetch request gets data on requested city
  //state code US-WI   https://en.wikipedia.org/wiki/ISO_3166-2:US
 
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={userApiKey}';

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