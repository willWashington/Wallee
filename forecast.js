//Variables
    var displayDates = [];
    var weatherPredictions = [];
    var temperatures = [];
    var dayTemps = [];
    var currentDate;
    var currentTime;

//EndVar

//Notes
    //figure out how to get temperature based on the hour of the day it is currently
    //somehow select the correct temperature from the array based on what day it is and what time it is

    //build an engine that determines what time it is currently and then selects the correct time frame within the day's list of data
//EndNotes

//Functions
window.onload = function() {
    weatherBalloon( 4647282 );
}

function weatherBalloon( cityID ) {
    var key = '0a3f9d42c2422fd058ffc13886c2cc14';
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data);
                drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, {timezone: 'UTC', weekday: "short", year: "2-digit", month: "short",   
    day: "numeric"});
}

function drawWeather( d ) {
    for (i=2; i<7; i++){ //the current day selector - if I set i=1 to i=0, it displays a day behind on the date
        var dayDate = d.list[0].dt_txt;
        var dateSplit = dayDate.split(' ');        
        var date = dateSplit[0];
        var currentDate = date;
        console.log(currentDate);
        var datePlus1 = date.split('-');
        datePlus1[2] = Number(datePlus1[2])+i -1; //get the future data
        displayDates.push(datePlus1.join('-'));
        // console.log(datePlus1.join('-')); //=> 11/08/2011
        console.log(Date.prototype.getDate());
    }

    for (i=0; i < d.list.length; i++) {
            //rebuild this functionality - simplify - create accurate data
            //test each value before moving forward

    }



    // for (i=0; i < d.list.length; i++) {
    //     for (x=0; x < displayDates.length; x++) {
    //         var txtData = d.list[x].dt_txt.split(' ');
    //         console.log(txtData);
    //     }


    // for (i=0; i < d.list.length; i++) {
    //     for (x=0; x < displayDates.length; x++) {
    //         var txtData = d.list[i].dt_txt.split(' ');        
    //         var time = txtData[1];
    //         if (txtData.includes(displayDates[x]) && time == "00:00:00") {                
    //             weatherPredictions.push(d.list[i].weather[0].description) //the weather prediction
    //             temperatures.push(Math.round(((parseFloat(d.list[i].main.temp)-273.15)*1.8)+32)); //the predicted temperature            
    //         }
    //     }
    // }

    var day1Day = getDayName(displayDates[1]);
    var day1Prediction = weatherPredictions[1];
    var day1Temp = temperatures[1];

    var day2Day = getDayName(displayDates[2]);
    var day2Prediction = weatherPredictions[2];
    var day2Temp = temperatures[2];

    var day3Day = getDayName(displayDates[3]);
    var day3Prediction = weatherPredictions[3];
    var day3Temp = temperatures[3];

    var day4Day = getDayName(displayDates[4]);
    var day4Prediction = weatherPredictions[4];
    var day4Temp = temperatures[4];

    var day5Day = getDayName(displayDates[5]);
    var day5Prediction = weatherPredictions[5];
    var day5Temp = temperatures[5];


    document.getElementById('day1Day').innerHTML = day1Day;
    document.getElementById('day1Temp').innerHTML = day1Temp + '&deg;F';
    document.getElementById('day1Prediction').innerHTML = day1Prediction;

    document.getElementById('day2Day').innerHTML = day2Day;
    document.getElementById('day2Temp').innerHTML = day2Temp + '&deg;F';
    document.getElementById('day2Prediction').innerHTML = day2Prediction;

    document.getElementById('day3Day').innerHTML = day3Day;
    document.getElementById('day3Temp').innerHTML = day3Temp + '&deg;F';
    document.getElementById('day3Prediction').innerHTML = day3Prediction;

    document.getElementById('day4Day').innerHTML = day4Day;
    document.getElementById('day4Temp').innerHTML = day4Temp + '&deg;F';
    document.getElementById('day4Prediction').innerHTML = day4Prediction;

    document.getElementById('day5Day').innerHTML = day5Day;
    document.getElementById('day5Temp').innerHTML = day5Temp + '&deg;F';
    document.getElementById('day5Prediction').innerHTML = day5Prediction;

    document.getElementById('days').style = "background-color: black";
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



//EndFunc










