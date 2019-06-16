//Variables
var daysToDisplay = []; //days to display

var day1HighTemps = [];
var day1LowTemps = [];
var day1Icons = [];
var day2HighTemps = [];
var day2LowTemps = [];
var day2Icons = [];
var day3HighTemps = [];
var day3LowTemps = [];
var day3Icons = [];
var day4HighTemps = [];
var day4LowTemps = [];
var day4Icons = [];
var day5HighTemps = [];
var day5LowTemps = [];
var day5Icons = [];

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
var day1Icon = 0;
var day2Icon = 0;
var day3Icon = 0;
var day4Icon = 0;
var day5Icon = 0;
var day1Day = getDayName(daysToDisplay[0]);
var day2Day = getDayName(daysToDisplay[1]);
var day3Day = getDayName(daysToDisplay[2]);
var day4Day = getDayName(daysToDisplay[3]);
var day5Day = getDayName(daysToDisplay[4]);
//EndVar

//Notes

//EndNotes

//Functions
window.onload = function() {
    weatherBalloon( 4647282 ); //allow user to input the city and convert it to city code by querying city.list.json
    setTimeout(loadNextPage, 10000);
}

function loadNextPage() {
    window.location = "https://willwashington.github.io/Wallee/index.html"
    //window.location.pathname = 'C:/Users/NEO/OneDrive/repos/C%23%20-%20Web%20-%20Core%20-%20ASP.NET%20-%20etc/web/wallee/forecast.html'
    //window.location.pathname = 'https://willwashington.github.io/Wallee/forecast.html'
    //change this to the location of the website on disk or in repo
  }

function weatherBalloon( cityID ) {
    var key = '0a3f9d42c2422fd058ffc13886c2cc14';
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                buildDayArray(data);
                drawWeather(data);
    })
    .catch(function() {
        // catch any errors
    });
}

function buildDayArray(data) {
    var unix_timestamp = data.list[0].dt;
    var date = new Date(unix_timestamp*1000);
    daysToDisplay = [addDays(date,1), addDays(date,2), addDays(date,3), addDays(date,4), addDays(date,5)];    
    dataMachine(data);    
    //this may cause wrong dates in data as the time is GMT and we are displaying EST - figure out how to convert
}
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    result.setHours(0,0,0,0);
    return result;
}

function dataMachine(data) { 
    let currentDate = new Date().getDay(); //get today's date
    for (i=0; i < data.list.length; i++) { //foreach item in the data set        
        let date = new Date(data.list[i].dt_txt).getDay(); //get the item's date        
        if (date != currentDate) { //if the day being looked at is not today
            let notDayDate = new Date(data.list[i].dt_txt); //get day that is not today
            notDayDate.setHours(0,0,0,0); //set time for the current day to 0
            notDayDate = notDayDate.getTime()/1000; //create unix timestamp for day sans time
            if (notDayDate == daysToDisplay[0].getTime()/1000) { //if the day being looked at is the first we want to display   
                let icon = data.list[i].weather[0].icon; //get the icon for the period of time we're looking at
                icon = icon.substr(0,icon.indexOf('d')); //parse the icon string to only select the number
                day1Icons.push(icon); //push the number to the icon array container
                let tempHighFloat = parseFloat(data.list[i].main.temp_max); //get the high temps for the day while iterating and convert it to a float
                let tempLowFloat = parseFloat(data.list[i].main.temp_min); //get the low temps for the day while iterating and convert it to a float                
                day1HighTemps.push(tempHighFloat); //add the high float to the day high temps
                day1LowTemps.push(tempLowFloat); //add the low float to the day low temps
                day1Day = data.list[i].dt_txt;
                day1Date = data.list[i].dt_txt;
            }
            if (notDayDate == daysToDisplay[1].getTime()/1000) { 
                let icon = data.list[i].weather[0].icon;
                icon = icon.substr(0,icon.indexOf('d'));
                day2Icons.push(icon);
                let tempHighFloat = parseFloat(data.list[i].main.temp_max); 
                let tempLowFloat = parseFloat(data.list[i].main.temp_min); 
                day2HighTemps.push(tempHighFloat); 
                day2LowTemps.push(tempLowFloat);
                day2Day = data.list[i].dt_txt;
                day2Date = data.list[i].dt_txt;
            }
            if (notDayDate == daysToDisplay[2].getTime()/1000) { 
                let icon = data.list[i].weather[0].icon;
                icon = icon.substr(0,icon.indexOf('d'));
                day3Icons.push(icon);
                let tempHighFloat = parseFloat(data.list[i].main.temp_max); 
                let tempLowFloat = parseFloat(data.list[i].main.temp_min); 
                day3HighTemps.push(tempHighFloat); 
                day3LowTemps.push(tempLowFloat);
                day3Day = data.list[i].dt_txt;
                day3Date = data.list[i].dt_txt;
            }
            if (notDayDate == daysToDisplay[3].getTime()/1000) { 
                let icon = data.list[i].weather[0].icon;
                icon = icon.substr(0,icon.indexOf('d'));
                day4Icons.push(icon);
                let tempHighFloat = parseFloat(data.list[i].main.temp_max); 
                let tempLowFloat = parseFloat(data.list[i].main.temp_min); 
                day4HighTemps.push(tempHighFloat); 
                day4LowTemps.push(tempLowFloat);
                day4Day = data.list[i].dt_txt;
                day4Date = data.list[i].dt_txt;
            }
            if (notDayDate == daysToDisplay[4].getTime()/1000) { 
                let icon = data.list[i].weather[0].icon;
                icon = icon.substr(0,icon.indexOf('d'));
                day5Icons.push(icon);
                let tempHighFloat = parseFloat(data.list[i].main.temp_max); 
                let tempLowFloat = parseFloat(data.list[i].main.temp_min); 
                day5HighTemps.push(tempHighFloat); 
                day5LowTemps.push(tempLowFloat);
                day5Day = data.list[i].dt_txt;
                day5Date = data.list[i].dt_txt;
            }
        }
    }
    findHighAndLowAndIcon();
}

function findHighAndLowAndIcon() {
    //day1
    for(i=0; i < day1HighTemps.length; i++) { //for every temp in the list of highs
        for(j=0; j < day1HighTemps.length; j++) { //for every other temp in the list of highs
            if (day1HighTemps[j] > day1HighTemps[i]) { //if the temp is higher than the other temp
                day1High = day1HighTemps[j]; //the high value equals the higher of the two
            }
        }
    }
    for(i=0; i < day1LowTemps.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day1LowTemps.length; j++) { //for every other temp in the list of Lows
            if (day1LowTemps[j] < day1LowTemps[i]) { //if the temp is Lower than the other temp
                day1Low = day1LowTemps[j]; //the Low value equals the Lower of the two
            }
        }
    }
    for(i=0; i < day1Icons.length; i++) { //for every icon in the icon array
        for(j=0; j < day1Icons.length; j++) { //for every other icon in the list of icons
            if (day1Icons[j] > day1Icons[i]) { //if the icon number is greater than the other icon number
                if (day1Icons[j] != 50) { //ignore possible mist icon from api https://openweathermap.org/weather-conditions
                    day1Icon = day1Icons[j]; //the icon value equals the greater of the two
                }
            }
        }
    }    
    //day2
    for(i=0; i < day2HighTemps.length; i++) { //for every temp in the list of highs
        for(j=0; j < day2HighTemps.length; j++) { //for every other temp in the list of highs
            if (day2HighTemps[j] > day2HighTemps[i]) { //if the temp is higher than the other temp
                day2High = day2HighTemps[j]; //the high value equals the higher of the two
            }
        }
    }
    for(i=0; i < day2LowTemps.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day2LowTemps.length; j++) { //for every other temp in the list of Lows
            if (day2LowTemps[j] < day2LowTemps[i]) { //if the temp is Lower than the other temp
                day2Low = day2LowTemps[j]; //the Low value equals the Lower of the two
            }
        }
    }
    for(i=0; i < day2Icons.length; i++) { 
        for(j=0; j < day2Icons.length; j++) { 
            if (day2Icons[j] > day2Icons[i]) { 
                if (day2Icons[j] != 50) { 
                    day2Icon = day2Icons[j]; 
                }
            }
        }
    }
    //day3
    for(i=0; i < day3HighTemps.length; i++) { 
        for(j=0; j < day3HighTemps.length; j++) { 
            if (day3HighTemps[j] > day3HighTemps[i]) { 
                day3High = day3HighTemps[j]; 
            }
        }
    }
    for(i=0; i < day3LowTemps.length; i++) { 
        for(j=0; j < day3LowTemps.length; j++) { //for every other temp in the list of Lows
            if (day3LowTemps[j] < day3LowTemps[i]) { //if the temp is Lower than the other temp
                day3Low = day3LowTemps[j]; //the Low value equals the Lower of the two
            }
        }
    }
    for(i=0; i < day3Icons.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day3Icons.length; j++) { //for every other temp in the list of Lows
            if (day3Icons[j] > day3Icons[i]) { //if the temp is Lower than the other temp
                if (day3Icons[j] != 50) { //ignore possible mist icon from api https://openweathermap.org/weather-conditions
                    day3Icon = day3Icons[j]; //the Low value equals the Lower of the two
                }
            }
        }
    }
    //day4
    for(i=0; i < day4HighTemps.length; i++) { //for every temp in the list of highs
        for(j=0; j < day4HighTemps.length; j++) { //for every other temp in the list of highs
            if (day4HighTemps[j] > day4HighTemps[i]) { //if the temp is higher than the other temp
                day4High = day4HighTemps[j]; //the high value equals the higher of the two
            }
        }
    }
    for(i=0; i < day4LowTemps.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day4LowTemps.length; j++) { //for every other temp in the list of Lows
            if (day4LowTemps[j] < day4LowTemps[i]) { //if the temp is Lower than the other temp
                day4Low = day4LowTemps[j]; //the Low value equals the Lower of the two
            }
        }
    }
    for(i=0; i < day4Icons.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day4Icons.length; j++) { //for every other temp in the list of Lows
            if (day4Icons[j] > day4Icons[i]) { //if the temp is Lower than the other temp
                if (day4Icons[j] != 50) { //ignore possible mist icon from api https://openweathermap.org/weather-conditions
                    day4Icon = day4Icons[j]; //the Low value equals the Lower of the two
                }
            }
        }
    }
    //day5
    for(i=0; i < day5HighTemps.length; i++) { //for every temp in the list of highs
        for(j=0; j < day5HighTemps.length; j++) { //for every other temp in the list of highs
            if (day5HighTemps[j] > day5HighTemps[i]) { //if the temp is higher than the other temp
                day5High = day5HighTemps[j]; //the high value equals the higher of the two
            }
        }
    }
    for(i=0; i < day5LowTemps.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day5LowTemps.length; j++) { //for every other temp in the list of Lows
            if (day5LowTemps[j] < day5LowTemps[i]) { //if the temp is Lower than the other temp
                day5Low = day5LowTemps[j]; //the Low value equals the Lower of the two
            }
        }
    }
    for(i=0; i < day5Icons.length; i++) { //for every temp in the list of Lows
        for(j=0; j < day5Icons.length; j++) { //for every other temp in the list of Lows
            if (day5Icons[j] > day5Icons[i]) { //if the temp is Lower than the other temp
                if (day5Icons[j] != 50) { //ignore possible mist icon from api https://openweathermap.org/weather-conditions
                    day5Icon = day5Icons[j]; //the Low value equals the Lower of the two
                }
            }
        }
    }
    day1High = convertToFahrenheit(day1High);
    day1Low = convertToFahrenheit(day1Low);
    day2High = convertToFahrenheit(day2High);
    day2Low = convertToFahrenheit(day2Low);
    day3High = convertToFahrenheit(day3High);
    day3Low = convertToFahrenheit(day3Low);
    day4High = convertToFahrenheit(day4High);
    day4Low = convertToFahrenheit(day4Low);
    day5High = convertToFahrenheit(day5High);
    day5Low = convertToFahrenheit(day5Low);
}

function convertToFahrenheit(temp) {
    //apply equation to convert from Kelvin to Fahrenheit
    return((temp-273.15)*1.8+32).toFixed(2);
}

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, {timezone: 'UTC', weekday: "short", year: "2-digit", month: "short",   
    day: "numeric"});
}

function drawWeather( d ) { 
    document.getElementById('day1Day').innerHTML = daysToDisplay[0].toString().split(' ')[0];    
    document.getElementById('day1Icon').src="https://openweathermap.org/img/w/" + day1Icon + "d.png";    
    document.getElementById('day1High').innerHTML = "High: " + day1High.split('.')[0] + '&deg;F';
    document.getElementById('day1Low').innerHTML = "Low: " + day1Low.split('.')[0] + '&deg;F';

    document.getElementById('day2Day').innerHTML = daysToDisplay[1].toString().split(' ')[0];    
    document.getElementById('day2Icon').src="https://openweathermap.org/img/w/" + day2Icon + "d.png";    
    document.getElementById('day2High').innerHTML = "High: " + day2High.split('.')[0] + '&deg;F';
    document.getElementById('day2Low').innerHTML = "Low: " + day2Low.split('.')[0] + '&deg;F';

    document.getElementById('day3Day').innerHTML = daysToDisplay[2].toString().split(' ')[0];    
    document.getElementById('day3Icon').src="https://openweathermap.org/img/w/" + day3Icon + "d.png";    
    document.getElementById('day3High').innerHTML = "High: " + day3High.split('.')[0] + '&deg;F';
    document.getElementById('day3Low').innerHTML = "Low: " + day3Low.split('.')[0] + '&deg;F';

    document.getElementById('day4Day').innerHTML = daysToDisplay[3].toString().split(' ')[0];    
    document.getElementById('day4Icon').src="https://openweathermap.org/img/w/" + day4Icon + "d.png";    
    document.getElementById('day4High').innerHTML = "High: " + day4High.split('.')[0] + '&deg;F';
    document.getElementById('day4Low').innerHTML = "Low: " + day4Low.split('.')[0] + '&deg;F';

    document.getElementById('day5Day').innerHTML = daysToDisplay[4].toString().split(' ')[0];       
    document.getElementById('day5Icon').src="https://openweathermap.org/img/w/" + day5Icon + "d.png";    
    document.getElementById('day5High').innerHTML = "High: " + day5High.split('.')[0] + '&deg;F';
    document.getElementById('day5Low').innerHTML = "Low: " + day5Low.split('.')[0] + '&deg;F';
}

//EndFunctions