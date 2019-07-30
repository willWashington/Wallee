//REWORK
//Create variables that store the daily data for all the data points that are received
//from that data, determine what days we want to display
//display data from variables
//data.list[0] is time segment 0
//algorithm can say foreach data.list[i], if data.list[i].dt_txt.split[0] does not equal the last day viewed, we're on a new day
//day1 variable can be data.list[i].dt_txt.split[0] and 
//day counter int can start at 0 and increment every time data.list[i].dt_txt.split[0] does not equal the last day viewed






//Variables
    var displayDates = []; //days to display
    var weatherPredictions = [];     
    var temperatures = [];
    var dayTemps = [];
    var day1High = 0;
    var day2High = 0;
    var day3High = 0;
    var day4High = 0;
    var day5High = 0;
    var day1Low = 0;
    var day2Low = 0;
    var day3Low = 0;
    var day4Low = 0;
    var day5Low = 0;
    var day1Day = getDayName(displayDates[0]);
    var day2Day = getDayName(displayDates[1]);
    var day3Day = getDayName(displayDates[2]);
    var day4Day = getDayName(displayDates[3]);
    var day5Day = getDayName(displayDates[4]);

    
    

//EndVar

//Notes
    //NEED:        
        //data parsing engine (json)
        //comparison engine - average temps for each day

        //innerhtml sets aren't working

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
                // parseData(data);
                // drawWeather(data);
                
                dataMachine(data);              
    })
    .catch(function() {
        // catch any errors
    });
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function dataMachine(data) {
 
    console.log('test');
    var unix_timestamp = data.list[0].dt;
    var date = new Date(unix_timestamp*1000);
    
    console.log(addDays(date,1));
    //from here will statement "starting tomorrow" - now need to collect highs and lows, etc - this will eliminate seeing today's weather
}






















function parseData(data) {    
    //Parse dates and add unique dates to the displayDates array
    for (i=0; i < data.list.length; i++) { //foreach item in the data set
        var countedDate = (data.list[i].dt_txt.split(' ')[0]);        
        if (displayDates.includes(countedDate)) {
            continue;
        } else {
            displayDates.push(countedDate);            
        }
    }
    day1(data);
    day2(data);
    day3(data);
    day4(data);
    day5(data);
    // console.log(day1High + " high1");
    // console.log(day2High + " high2");
    // console.log(day3High + " high3");
    // console.log(day4High + " high4");
    // console.log(day5High + " high5");
    // console.log(day1Low + " low1");
    // console.log(day2Low + " low2");
    // console.log(day3Low + " low3");
    // console.log(day4Low + " low4");
    // console.log(day5Low + " low5");

    //End parse dates
}




//these day calls are working, but they are returning 75ish degrees which is wrong
//need to further parse this and only include data within daylight hours
//something like if (hours < 8 PM military)

//the above notes aren't working - slack guy made a good point that people want highs and lows
//calculate highs and lows for the entire day and display both of them

//between 0600 and 2100 is Summer daytime - 6 am to 9 pm

function day1(data) {
    let highs = [];
    for (x=0; x < data.list.length; x++) { //foreach item in the data set
        if (data.list[x].dt_txt.split(' ')[0] == displayDates[0]){ //if the date is the first date in the display dates array
                let tempFloat = parseFloat(data.list[x].main.temp_max);                
                highs.push(tempFloat);
                for(i=0; i < highs.length; i++) {                    
                    for(j=0; j < highs.length; j++) {
                        if (j > i) {                            
                            day1High = highs[i];
                        }
                    }
                }                       
            }
        }
        day1High = ((day1High-273.15)*1.8+32).toFixed(2);                
        //console.log(day1High + ' day1 high ' + displayDates[0]); //this day returns -459 which is fahrenheit for kelvin 0 - meaning day1high is 0 when it hits the calculation
}    //End store

function day2(data) {
    let highs = [];
    for (x=0; x < data.list.length; x++) { //foreach item in the data set
        if (data.list[x].dt_txt.split(' ')[0] == displayDates[1]){ //if the date is the first date in the display dates array
                let tempFloat = parseFloat(data.list[x].main.temp_max);                
                highs.push(tempFloat);
                for(i=0; i < highs.length; i++) {                    
                    for(j=0; j < highs.length; j++) {
                        if (j > i) {                            
                            day2High = highs[i];
                        }
                    }
                }                       
            }
        }
        day2High = ((day2High-273.15)*1.8+32).toFixed(2);
        //console.log(day2High + ' day2 high ' + displayDates[1]);
}    //End store

function day3(data) {
    let highs = [];
    for (x=0; x < data.list.length; x++) { //foreach item in the data set
        if (data.list[x].dt_txt.split(' ')[0] == displayDates[2]){ //if the date is the first date in the display dates array
                let tempFloat = parseFloat(data.list[x].main.temp_max);                
                highs.push(tempFloat);
                for(i=0; i < highs.length; i++) {                    
                    for(j=0; j < highs.length; j++) {
                        if (j > i) {                            
                            day3High = highs[i];
                        }
                    }
                }                       
            }
        }
        day3High = ((day3High-273.15)*1.8+32).toFixed(2);                
        //console.log(day3High + ' day3 high ' + displayDates[2]);
}    //End store

function day4(data ) {
    let highs = [];
    for (x=0; x < data.list.length; x++) { //foreach item in the data set        
        if (data.list[x].dt_txt.split(' ')[0] == displayDates[3]){ //if the date is the first date in the display dates array                
                let tempFloat = parseFloat(data.list[x].main.temp_max);                
                highs.push(tempFloat);
                for(i=0; i < highs.length; i++) {                    
                    for(j=0; j < highs.length; j++) {
                        if (j > i) {                            
                            day4High = highs[i];
                        }
                    }
                }                       
            }
        }
        day4High = ((day4High-273.15)*1.8+32).toFixed(2);                
        //console.log(day4High + ' day4 high ' + displayDates[3]);
}    //End store

function day5(data ) {
    let highs = [];
    for (x=0; x < data.list.length; x++) { //foreach item in the data set
        if (data.list[x].dt_txt.split(' ')[0] == displayDates[4]){ //if the date is the first date in the display dates array
                let tempFloat = parseFloat(data.list[x].main.temp_max);                
                highs.push(tempFloat);
                for(i=0; i < highs.length; i++) {                    
                    for(j=0; j < highs.length; j++) {
                        if (j > i) {                            
                            day5High = highs[i];
                        }
                    }
                }
            }
        }
        day5High = ((day5High-273.15)*1.8+32).toFixed(2);                
        //console.log(day5High + ' day5 high ' + displayDates[4]); //this day is 10 degrees below projected high
}    //End store

function findAverage(temp, counter){
    var average = 0;
    average = temp / counter;
    return average;
}


function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, {timezone: 'UTC', weekday: "short", year: "2-digit", month: "short",   
    day: "numeric"});
}

function drawWeather( d ) {

    document.getElementById('day1Day').innerHTML = day1Day;
    document.getElementById('day1Date').innerHTML = displayDates[0];
    document.getElementById('day1High').innerHTML = day1High + '&deg;F';
    document.getElementById('day1Low').innerHTML = day1Low + '&deg;F';


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




//old draw weather
    // for (i=2; i<7; i++){ //the current day selector - if I set i=1 to i=0, it displays a day behind on the date
    //     var dayDate = d.list[0].dt_txt;
    //     var dateSplit = dayDate.split(' ');        
    //     var date = dateSplit[0];
    //     var currentDate = date;
    //     console.log(currentDate);
    //     var datePlus1 = date.split('-');
    //     datePlus1[2] = Number(datePlus1[2])+i -1; //get the future data
    //     displayDates.push(datePlus1.join('-'));
    //     // console.log(datePlus1.join('-')); //=> 11/08/2011
    //     console.log(Date.prototype.getDate());
    // }

    // for (i=0; i < d.list.length; i++) {
    //         //rebuild this functionality - simplify - create accurate data
    //         //test each value before moving forward

    // }



    // // for (i=0; i < d.list.length; i++) {
    // //     for (x=0; x < displayDates.length; x++) {
    // //         var txtData = d.list[x].dt_txt.split(' ');
    // //         console.log(txtData);
    // //     }


    // // for (i=0; i < d.list.length; i++) {
    // //     for (x=0; x < displayDates.length; x++) {
    // //         var txtData = d.list[i].dt_txt.split(' ');        
    // //         var time = txtData[1];
    // //         if (txtData.includes(displayDates[x]) && time == "00:00:00") {                
    // //             weatherPredictions.push(d.list[i].weather[0].description) //the weather prediction
    // //             temperatures.push(Math.round(((parseFloat(d.list[i].main.temp)-273.15)*1.8)+32)); //the predicted temperature            
    // //         }
    // //     }
    // // }






/*
if (data.list[x].dt_txt.split(' ')[1].split(':')[0] >= 06 && data.list[x].dt_txt.split(' ')[1].split(':')[0] <= 21){
                //get time between 6 am and 9 pm
*/