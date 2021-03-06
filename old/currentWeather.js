function weatherBalloon(cityID) {
  var key = '0a3f9d42c2422fd058ffc13886c2cc14';
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + cityID + '&appid=' + key)
    .then(function (resp) {
      return resp.json()
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
    let url = window.location.href;
    let inc = url.includes('current');
    if (inc) {
      setTimeout(loadNextPage, 10000);
    }
}

window.onload = function () {
  zipcode = localStorage.zip;
  //weatherBalloon(zipcode);
}

function loadNextPage() {
  window.location = "https://willwashington.github.io/Wallee/forecast.html"
  //window.location.pathname = 'C:/Users/NEO/OneDrive/repos/C%23%20-%20Web%20-%20Core%20-%20ASP.NET%20-%20etc/web/wallee/forecast.html'
  //window.location.pathname = 'https://willwashington.github.io/Wallee/forecast.html'
  //change this to the location of the website on disk or in repo
}

function drawWeather(d) {
  var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
  var description = d.weather[0].description;
  var icon = d.weather[0].icon;

  document.getElementById('description').innerHTML = description;
  document.getElementById('description').style = "margin-left: 18px;";
  document.getElementById('indexIcon').src = "https://openweathermap.org/img/w/" + icon + ".png";
  document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('location').innerHTML = d.name;

  if (d.indexOf('rain') > 0) {
    document.getElementById("display").className = 'rainy';
  } else if (d.indexOf('cloud') > 0) {
    document.getElementById("display").className = 'cloudy';
  } else if (d.indexOf('sunny') > 0) {
    document.getElementById("display").className = 'sunny';
  }
}