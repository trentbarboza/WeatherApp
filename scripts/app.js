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



function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&APPID=99ddde24d75f18e8da53fbebabbdd073")
    .then(resp => resp.json())
    .then(data => {
        //console.log(data);

    });
}
getWeather();

searchBtn.addEventListener('click', function(e){
    getWeatherData();
    //get5DayWeather();
})

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        Location.textContent = data.name + "," + data.sys.country;
        Icon.textContent = data.weather.icon;
        temp.textContent = data.main.temp;
        feelsLike.textContent = "Feels Like: " + data.main.feels_like;
        wind.textContent = "Wind: " + data.wind.speed + " mph";
        humidity.textContent = "Humidity: " + data.main.humidity;
        desc.textContent = data.weather.main;

        //console.log(data);
    });
}

function get5DayWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        //console.log(data);
    });
}