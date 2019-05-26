function weatherBalloon( cityID ) {
    var key = '0a3f9d42c2422fd058ffc13886c2cc14';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
        drawWeather(data);
    })
    .catch(function() {
        // catch any errors
});
}

window.onload = function() {
weatherBalloon( 4647282 );
}

function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
  var description = d.weather[0].description;
  

  document.getElementById('description').innerHTML = description;
  document.getElementById('description').style = "margin-left: 18px;"
  document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  document.getElementById('location').innerHTML = d.name;

  if( description.indexOf('rain') > 0 ) {
  document.getElementById("display").className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  document.getElementById("display").className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
    document.getElementById("display").className = 'sunny';
  }
}
