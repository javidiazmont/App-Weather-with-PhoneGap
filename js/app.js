let key = "e7e482e299f46d23a6b5e5dbea06bf87";


// Estado del tiempo = Valdemoro

let cityName = document.getElementById("city-name");
let cityCountry = document.getElementById("city-country");
let icon = document.getElementById("icon");
let weatherMain = document.getElementById("weather-main");
let weatherDescription = document.getElementById("weather-description");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Valdemoro&APPID='+ key + '',
  type: 'GET',
  dataType: 'json'
})

.done(function(data){
  cityName.innerHTML = data.name;
  icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  weatherMain.innerHTML = data.weather[0].main;
  weatherDescription.innerHTML = data.weather[0].description;
  cityCountry.innerHTML = "País: " + data.sys.country;
  temperature.innerHTML = "Temperatura: " + parseInt(data.main.temp - 273) + "°C";
  humidity.innerHTML = "Humedad: " + data.main.humidity + "%";
  windSpeed.innerHTML = "Velocidad del Viento: " + data.wind.speed;
});

// Estado del tiempo = Aranjuez

let cityName2 = document.getElementById("city-name-2");
let cityCountry2 = document.getElementById("city-country-2");
let icon2 = document.getElementById("icon-2");
let weatherMain2 = document.getElementById("weather-main-2");
let weatherDescription2 = document.getElementById("weather-description-2");
let temperature2 = document.getElementById("temp-2");
let humidity2 = document.getElementById("humidity-2");
let windSpeed2 = document.getElementById("wind-speed-2");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Aranjuez&APPID='+ key + '',
  type: 'GET',
  dataType: 'json'
})

.done(function(data2){
  cityName2.innerHTML = data2.name;
  icon2.src = "http://openweathermap.org/img/w/" + data2.weather[0].icon + ".png";
  weatherMain2.innerHTML = data2.weather[0].main;
  weatherDescription2.innerHTML = data2.weather[0].description;
  cityCountry2.innerHTML = "País: " + data2.sys.country;
  temperature2.innerHTML = "Temperatura: " + parseInt(data2.main.temp - 273) + "°C";
  humidity2.innerHTML = "Humedad: " + data2.main.humidity + "%";
  windSpeed2.innerHTML = "Velocidad del Viento: " + data2.wind.speed;
});

// Estado del tiempo = Alcala de Henares

let cityName3 = document.getElementById("city-name-3");
let cityCountry3 = document.getElementById("city-country-3");
let icon3 = document.getElementById("icon-3");
let weatherMain3 = document.getElementById("weather-main-3");
let weatherDescription3 = document.getElementById("weather-description-3");
let temperature3 = document.getElementById("temp-3");
let humidity3 = document.getElementById("humidity-3");
let windSpeed3 = document.getElementById("wind-speed-3");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Alcala+de+Henares&APPID='+ key + '',
  type: 'GET',
  dataType: 'json'
})

.done(function(data3){
  cityName3.innerHTML = data3.name;
  icon3.src = "http://openweathermap.org/img/w/" + data3.weather[0].icon + ".png";
  weatherMain3.innerHTML = data3.weather[0].main;
  weatherDescription3.innerHTML = data3.weather[0].description;
  cityCountry3.innerHTML = "País: " + data3.sys.country;
  temperature3.innerHTML = "Temperatura: " + parseInt(data3.main.temp - 273) + "°C";
  humidity3.innerHTML = "Humedad: " + data3.main.humidity + "%";
  windSpeed3.innerHTML = "Velocidad del Viento: " + data3.wind.speed;
});

// Estado del tiempo = madrid

let cityName4 = document.getElementById("city-name-4");
let cityCountry4 = document.getElementById("city-country-4");
let icon4 = document.getElementById("icon-4");
let weatherMain4 = document.getElementById("weather-main-4");
let weatherDescription4 = document.getElementById("weather-description-4");
let temperature4 = document.getElementById("temp-4");
let humidity4 = document.getElementById("humidity-4");
let windSpeed4 = document.getElementById("wind-speed-4");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID='+ key + '',
  type: 'GET',
  dataType: 'json'
})

.done(function(data4){
  cityName4.innerHTML = data4.name;
  icon4.src = "http://openweathermap.org/img/w/" + data4.weather[0].icon + ".png";
  weatherMain4.innerHTML = data4.weather[0].main;
  weatherDescription4.innerHTML = data4.weather[0].description;
  cityCountry4.innerHTML = "País: " + data4.sys.country;
  temperature4.innerHTML = "Temperatura: " + parseInt(data4.main.temp - 273) + "°C";
  humidity4.innerHTML = "Humedad: " + data4.main.humidity + "%";
  windSpeed4.innerHTML = "Velocidad del Viento: " + data4.wind.speed;
});

// Busqueda Dinamica

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let addBox = document.getElementById("content-box");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+key;
    httpRequestAsync(searchLink, theResponse);
    console.log(searchLink);
  }
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  addBox.innerHTML = "<br><center><div class='country_1'>" + jsonObject.name + "<br><img src='http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png'/><br>" + jsonObject.weather[0].main + "<br>" + jsonObject.weather[0].description + "<br> País: " + jsonObject.sys.country + "<br>Temperatura: " + parseInt(jsonObject.main.temp - 273) + "°C" + "<br> Humedad: " + jsonObject.main.humidity + "%" + "<br> Velocidad del Viento: " + jsonObject.wind.speed + "</div></center>";
  
}

function httpRequestAsync(url, callback)
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}