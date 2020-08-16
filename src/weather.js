const weather = document.querySelector(".weather");

const API_KEY = "a634fab84d2882f179ee2f4814c23dfe";
const LOCATION_LS = 'locationChord';

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json();
        }).then(function(weatherInfo) {
            const temHere = weatherInfo.main.temp;
            const placeHere = weatherInfo.name;
            weather.innerText = `${temHere}℃ / ${placeHere}`;
        });
};

function loadSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationObj = {
        latitude : latitude,
        longitude : longitude
    };

    localStorage.setItem(LOCATION_LS, JSON.stringify(locationObj));
    getWeather(latitude, longitude);
}

function loadFail() {
    alert('Cant access geo location... Please agree to collect location information.');
}

function init() {
    const loadLocation = localStorage.getItem(LOCATION_LS);
    if(loadLocation === null) {
        navigator.geolocation.getCurrentPosition(loadSucces, loadFail);
    } else {
        const locationNum = JSON.parse(loadLocation);
        getWeather(locationNum.latitude, locationNum.longitude);
    }
}

setInterval(init(), 30000);