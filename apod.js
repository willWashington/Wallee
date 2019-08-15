//api key = 7e6705968fb042c49fbb3a18ee93dfc6
//https://newsapi.org/v2/top-headlines?country=us&apiKey=7e6705968fb042c49fbb3a18ee93dfc6

function weatherBalloon(cityID) {
    //var key = '0a3f9d42c2422fd058ffc13886c2cc14';
    fetch('https://api.nasa.gov/planetary/apod?api_key=z19HNBZ0BjnuYFxkQwIIcDVayCijNqOFTk7mRtIc')
      .then(function (resp) {
        return resp.json()
      }) // Convert data to json
      .then(function (data) {
        buildDisplay(data);
        console.log(data);
      })
      .catch(function () {
        // catch any errors
      });
      //let url = window.location.href;
      //let inc = url.includes('current');
      //if (inc) {
        //setTimeout(loadNextPage, 10000);
      //}
  }
  
  window.onload = function () {
    //zipcode = localStorage.zip;
    weatherBalloon();
  }

  function buildDisplay(data) {
    let img = document.getElementById('bodyImg');
    let desc = document.getElementById('apodDesc');    
    img.src = data.hdurl;
    console.log(data.hdurl);
    // img.style.maxHeight = '100%';
    // img.style.height = '50%';
    // img.style.maxWidth = '100%';
    desc.innerHTML = data.explanation;
  }

  //convert to news pull
  //move news and weather pull to separate script
  //pull news only once per hour and weather only once per 30m
