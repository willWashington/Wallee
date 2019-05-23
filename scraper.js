
  function weatherDisplay( zipCode ){
    var key = '0a3f9d42c2422fd058ffc13886c2cc14';                    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Knoxville&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
    }

    window.onload = function() {
    weatherDisplay( 37840 );
    }

    function drawWeather( d ) {
      var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
      
      document.getElementById('description').innerHTML = d.weather[0].description;
      document.getElementById('temp').innerHTML = celcius + '&deg;';
      document.getElementById('location').innerHTML = d.name;
    }

