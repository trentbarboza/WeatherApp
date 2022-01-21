let input = document.getElementById('input');
let searchBtn = document.getElementById('searchBtn');
let Icon = document.getElementById('Icon');
let Location = document.getElementById('Location');
let icon = document.getElementById('icon');
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




function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&units=imperial&APPID=99ddde24d75f18e8da53fbebabbdd073")
    .then(resp => resp.json())
    .then(data => {
        //console.log(data);
        Location.textContent = data.name + "," + data.sys.country;
        Icon.textContent = data.weather.icon;
        temp.textContent = data.main.temp + "°F";
        feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°F";
        wind.textContent = "Wind: " + data.wind.speed + " mph";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        console.log(desc.textContent = data.weather[1])
        //desc.textContent = data.weather[2];
    });
}
getWeather();

function get5DayWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=philadelphia,usa&units=imperial&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        day1Temp.textContent = data.list[0].main.temp_max + " / " + data.list[0].main.temp_min + "°";
        day2Temp.textContent = data.list[7].main.temp_max + " / " + data.list[7].main.temp_min + "°";
        day3Temp.textContent = data.list[15].main.temp_max + " / " + data.list[15].main.temp_min + "°";
        day4Temp.textContent = data.list[23].main.temp_max + " / " + data.list[23].main.temp_min + "°";
        day5Temp.textContent = data.list[31].main.temp_max + " / " + data.list[31].main.temp_min + "°";
    });
}
get5DayWeather();

function getWeatherCelsius(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&units=metric&APPID=99ddde24d75f18e8da53fbebabbdd073")
    .then(resp => resp.json())
    .then(data => {
        Location.textContent = data.name + "," + data.sys.country;
        Icon.textContent = data.weather.icon;
        temp.textContent = data.main.temp + "°C";
        feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°C";
        wind.textContent = "Wind: " + data.wind.speed + " mph";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        desc.textContent = data.weather[1].main;
    });
}

F2CBTN.addEventListener('click', function(e){
    getWeatherCelsius();
})


searchBtn.addEventListener('click', function(e){
    getWeatherInput();
    get5DayWeatherInput();
})

function getWeatherInput() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        Location.textContent = data.name + "," + data.sys.country;
        Icon.textContent = data.weather.icon;
        temp.textContent = data.main.temp + "°F";
        feelsLike.textContent = "Feels Like: " + data.main.feels_like + "°F";
        wind.textContent = "Wind: " + data.wind.speed + " mph";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        desc.textContent = data.weather.description;

        //console.log(data);
    });
}

function get5DayWeatherInput() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=imperial&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        day1Temp.textContent = data.list[0].main.temp_max + " / " + data.list[0].main.temp_min + "°";
        day2Temp.textContent = data.list[7].main.temp_max + " / " + data.list[7].main.temp_min + "°";
        day3Temp.textContent = data.list[15].main.temp_max + " / " + data.list[15].main.temp_min + "°";
        day4Temp.textContent = data.list[23].main.temp_max + " / " + data.list[23].main.temp_min + "°";
        day5Temp.textContent = data.list[31].main.temp_max + " / " + data.list[31].main.temp_min + "°";
    });
}