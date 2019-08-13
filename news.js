//api key = 7e6705968fb042c49fbb3a18ee93dfc6
https://newsapi.org/v2/top-headlines?country=us&apiKey=7e6705968fb042c49fbb3a18ee93dfc6

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
    weatherBalloon(zipcode);
  }

  //convert to news pull
  //move news and weather pull to separate script
  //pull news only once per hour and weather only once per 30m
  