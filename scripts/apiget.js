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