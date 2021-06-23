//--global variables
var userApiKey="5d050cc05f2e639349f41af0545c2086";
var cityName=""
var currentUvIndex=""
var longitude=""
var lattitude=""
// DOM element references, from form in html
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todaysForecast = document.querySelector('#todays-forecast');


//--Geocoding lat & lon
var requestGeo ="https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + ",US+&appid=" + userApiKey;

//--URL needs the concatonated variables to run the request.
// "https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&appid=" + userApiKey;


var fetchButton = document.getElementById('search-button');

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
// fetchButton.addEventListener('click', weatherFetch);
// THEN I am presented with the city name, the date, an icon representation of weather conditions, 
// the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index

function weatherSearch(event) {
  event.preventDefault()
  var search = searchInput.value
  var requestURL="https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + userApiKey;
  

  fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        
        var cityName = data.name;
        var currentTemp = data.main.temp;
        var currentHumidity = data.main.humidity;
        var currentWindSpeed = data.wind.speed;
        var icon = data.weather[0].icon;
        todaysForecast.textContent=`City Name: ${cityName} Temp: ${currentTemp} Humidity: ${currentHumidity} Wind Speed:${currentWindSpeed} Icon:${icon}`; 
      })
    .catch(function (err) {
      console.error(err);
    });
}



          
// var req = new Request(requestURL);
// fetch(req)
//     .then(function(response) {
//         return response.json();
//         console.log(results);

//     }).then(function(jsonResponse){
//       console.log(jsonResponse)
//     })




// weather icon export.
// https://openweathermap.org/img/w/%7Biconcode%7D.png
















fetchButton.addEventListener('click', weatherSearch);





// 'https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={userApiKey}';
// var requestURL = https://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

////Bryan said cut the state - it will run anyways ???
// var stateName = "";
// var stateCode =