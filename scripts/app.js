let input = document.getElementById('input');
let searchBtn = document.getElementById('searchBtn');
let icon = document.getElementById('icon');


function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=philadelphia,usa&APPID=99ddde24d75f18e8da53fbebabbdd073")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
}
getWeather();

searchBtn.addEventListener('click', function(e){
    getWeatherData();
    get5DayWeather();
})

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
}

function get5DayWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&APPID=99ddde24d75f18e8da53fbebabbdd073`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
}