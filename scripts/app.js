import { prod, dev } from './environment.js';

let apiKey;
if (prod.isLive) {
    apiKey = prod.apiKey;
} else {
    apiKey = dev.apiKey;
}

let input = document.getElementById('input');
let searchBtn = document.getElementById('searchBtn');
let mainIcon = document.getElementById('mainIcon');
let Location = document.getElementById('Location');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let feelsLike = document.getElementById('feelsLike');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let fav1 = document.getElementById('fav1');
let fav2 = document.getElementById('fav2');
let fav3 = document.getElementById('fav3');
let fav4 = document.getElementById('fav4');
let fav5 = document.getElementById('fav5');
let day1 = document.getElementById('day1');
let day2 = document.getElementById('day2');
let day3 = document.getElementById('day3');
let day4 = document.getElementById('day4');
let day5 = document.getElementById('day5');
let F2CBTN = document.getElementById('F2CBTN');
let day1Temp = document.getElementById('day1Temp');
let day2Temp = document.getElementById('day2Temp');
let day3Temp = document.getElementById('day3Temp');
let day4Temp = document.getElementById('day4Temp');
let day5Temp = document.getElementById('day5Temp');
let day1Icon = document.getElementById('day1Icon');
let day2Icon = document.getElementById('day2Icon');
let day3Icon = document.getElementById('day3Icon');
let day4Icon = document.getElementById('day4Icon');
let day5Icon = document.getElementById('day5Icon');
let favBTN = document.getElementById('favBTN');

let lat1;
let lon1;
let weatherOneCall;

let lat2;
let lon2;
let weatherOneCall2;

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&units=imperial&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            Location.textContent = data.name + "," + data.sys.country;
            mainIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            temp.textContent = data.main.temp + "°F";
            feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°F";
            wind.textContent = "Wind: " + data.wind.speed + " mph";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";
            desc.textContent = data.weather[0].main;
            lat1 = data.coord.lat;
            lon1 = data.coord.lon;

            weatherOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lon1}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`

            getOneCall(weatherOneCall);
        });
}
getWeather();

function getOneCall(weatherOneCall) {
    fetch(weatherOneCall)
        .then(resp => resp.json())
        .then(data => {
            day1Temp.textContent = data.daily[1].temp.max + " / " + data.daily[1].temp.min + "°";
            day1Icon.src = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png";
            day2Temp.textContent = data.daily[2].temp.max + " / " + data.daily[2].temp.min + "°";
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png";
            day3Temp.textContent = data.daily[3].temp.max + " / " + data.daily[3].temp.min + "°";
            day3Icon.src = "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png";
            day4Temp.textContent = data.daily[4].temp.max + " / " + data.daily[4].temp.min + "°";
            day4Icon.src = "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png";
            day5Temp.textContent = data.daily[5].temp.max + " / " + data.daily[5].temp.min + "°";
            day5Icon.src = "https://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png";
        })
}


function get5DayWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=philadelphia,usa&units=imperial&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            day1.textContent = displayWeekday(data.list[0].dt_txt);
            //day1Temp.textContent = data.list[0].main.temp_max + " / " + data.list[0].main.temp_min + "°";
            // day1Icon.src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
            day2.textContent = displayWeekday(data.list[7].dt_txt);
            //day2Temp.textContent = data.list[7].main.temp_max + " / " + data.list[7].main.temp_min + "°";
            //day2Icon.src = "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png";
            day3.textContent = displayWeekday(data.list[15].dt_txt);
            //day3Temp.textContent = data.list[15].main.temp_max + " / " + data.list[15].main.temp_min + "°";
            //day3Icon.src = "https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png";
            day4.textContent = displayWeekday(data.list[23].dt_txt);
            //day4Temp.textContent = data.list[23].main.temp_max + " / " + data.list[23].main.temp_min + "°";
            //day4Icon.src = "https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png";
            day5.textContent = displayWeekday(data.list[31].dt_txt);
            //day5Temp.textContent = data.list[31].main.temp_max + " / " + data.list[31].main.temp_min + "°";
            //day5Icon.src = "https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png";
        });
}
get5DayWeather();

function getWeatherCelsius() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&units=metric&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            temp.textContent = data.main.temp + "°C";
            feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°C";
        });
}

F2CBTN.addEventListener('click', function (e) {
    if (input.value == "") {
        getWeatherCelsius();
    } else {
        getWeatherInputCelsius();
    }
})


searchBtn.addEventListener('click', function (e) {
    getWeatherInput();
    get5DayWeatherInput();
})

function getWeatherInput() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            Location.textContent = data.name + "," + data.sys.country;
            mainIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            temp.textContent = data.main.temp + "°F";
            feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°F";
            wind.textContent = "Wind: " + data.wind.speed + " mph";
            humidity.textContent = "Humidity: " + data.main.humidity + "%";
            desc.textContent = data.weather[0].main;

            lat2 = data.coord.lat;
            lon2 = data.coord.lon;

            weatherOneCall2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat2}&lon=${lon2}&exclude=hourly,minutely&units=imperial&appid=${apiKey}`


            getOneCall2(weatherOneCall2);
        });
}

function getOneCall2(weatherOneCall2) {
    fetch(weatherOneCall2)
        .then(resp => resp.json())
        .then(data => {
            day1Temp.textContent = data.daily[1].temp.max + " / " + data.daily[1].temp.min + "°";
            day1Icon.src = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png";
            day2Temp.textContent = data.daily[2].temp.max + " / " + data.daily[2].temp.min + "°";
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png";
            day3Temp.textContent = data.daily[3].temp.max + " / " + data.daily[3].temp.min + "°";
            day3Icon.src = "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + ".png";
            day4Temp.textContent = data.daily[4].temp.max + " / " + data.daily[4].temp.min + "°";
            day4Icon.src = "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + ".png";
            day5Temp.textContent = data.daily[5].temp.max + " / " + data.daily[5].temp.min + "°";
            day5Icon.src = "https://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + ".png";
        })
}


function getWeatherInputCelsius() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            temp.textContent = data.main.temp + "°C";
            feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°C";
        });
}

///////function to create weekdays to show up
function displayWeekday(time) {
    let d = new Date(time);
    let weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return weekdays[d.getUTCDay()];
}


function get5DayWeatherInput() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=imperial&APPID=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
            day1.textContent = displayWeekday(data.list[0].dt_txt);
            day2.textContent = displayWeekday(data.list[7].dt_txt);
            day3.textContent = displayWeekday(data.list[15].dt_txt);
            day4.textContent = displayWeekday(data.list[23].dt_txt);
            day5.textContent = displayWeekday(data.list[31].dt_txt);
        });
}


let favOn = false;
favBTN.addEventListener('click', function (e) {
    if (favOn == true) {
        favBTN.src = "./images/bookmark filled.png"
    } else {
        favBTN.src = "./images/Icon feather-bookmark.png"
    }
    favOn = !favOn;
})