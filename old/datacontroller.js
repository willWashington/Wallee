// data controller is responsible for pulling data at intervals

var currentWeatherData = {};
var forecastData = {};
var apodData = {};
var key = '0a3f9d42c2422fd058ffc13886c2cc14';

if (Object.entries(currentWeatherData).length === 0) {
    console.log(':[ Updating Current Weather Data ]:Initial');
    updateCurrentWeatherData();
}
if (Object.entries(forecastData).length === 0) {
    console.log(':[ Updating Forecast Weather Data ]:Initial');
    updateForecastWeatherData();
}
if (Object.entries(apodData).length === 0) {
    console.log(':[ Updating APOD Data ]:Initial');
    updateAPODData();
}
// setInterval(testAPODUpdateNeed, 600000);
// setInterval(updateCurrentWeatherData, 1000 * 60 * 60);
// setInterval(updateForecastWeatherData, 6000 * 60 * 60);
setInterval(updateCurrentWeatherData, 1000);
setInterval(updateForecastWeatherData, 3000);

//DEFINE CURRENT WEATHER DATA - SET REFRESH INTERVAL
// get current weather data
async function getCurrentWeatherData(cityID) {
    var response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + cityID + '&appid=' + key)
    var json = await response.json();
    return json;
}
async function updateCurrentWeatherData(){
    let json = await getCurrentWeatherData(localStorage.zip);
    currentWeatherData = json;
    let d = new Date(); // for now
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = hours + ':' + minutes + ':' + seconds;
    console.log('[' + time + ']: Updating Current Weather Data.' );
}

//DEFINE FORECAST WEATHER DATA - SET REFRESH INTERVAL
// get forecast weather data
async function getForecastWeatherData(cityID) {        
    var response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=' + cityID + '&appid=' + key)
    var json = await response.json();
    return json;
}
async function updateForecastWeatherData(){
    let json = await getForecastWeatherData(localStorage.zip);
    forecastData = json;
    let d = new Date(); // for now
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = hours + ':' + minutes + ':' + seconds;
    console.log('[' + time + ']: Updating Forecast Weather Data.' );
}

//DEFINE APOD DATA - SET REFRESH INTERVAL
// get APOD data
function testAPODUpdateNeed() {
    let d = new Date();
    let curdate = d.getDate();
    if (curdate > localStorage.apodCallDate){
        updateAPODData();
    } else if (curdate === 1) {
        updateAPODData();
    }
}
async function getAPODData() {
    let d = new Date();
    apodCallDate = d.getDate();
    var response = await fetch('https://api.nasa.gov/planetary/apod?api_key=z19HNBZ0BjnuYFxkQwIIcDVayCijNqOFTk7mRtIc');    
    var json = await response.json();
    return json;
}
async function updateAPODData(){    
    let json = await getAPODData();
    apodData = json;
    let d = new Date(); // now
    let lastcall = d.getDate();
    localStorage.setItem('lastApodCall', lastcall);
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = hours + ':' + minutes + ':' + seconds;
    console.log('[' + time + ']: Updating APOD Data.' );
}