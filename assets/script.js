var weather
var api = 'https://api.openweathermap.org/data/2.5/weather?q='
var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?q='
var api_key = '&appid=be5756bbc4a04e806285db783e74b576'
var units = '&units=imperial'
var input
var currentLoc
var savedLocation = []
// var curContainer = $('container2')
// var fiveDayCol = $('.c3')

// gets api from call_weather function and creates an on click with user input
var button = $('#button-addon2')
$(button).click(call_weather)
$(button).click(call_fiveDay)
input = $('.form-control')
// let picURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
// let todayPic = $("icon").append($("<img>").attr("src",picURL).attr("class","card-img"));
// fiveDaycol.append(todayPic);

// calls api information including the city the user types in

function initialize() {
    savedLocation = JSON.parse(localStorage.getItem("cityweather"));
        if (savedLocation) {
            //display previous location
            currentLoc = savedLocation[savedLocation.length - 1];
            showPrevious();
            getCurrent(currentLoc);
            console.log(localStorage);
        }
        //if user does not want to share location it gives this default location weather
        else {
            if (!navigator.geolocation) {
                getCurrent("Myrtle Beach");
            }
        //asking user permission to share location
        //if user allows app will give weather for users current location (geolocation API)
            else {
            navigator.geolocation.getCurrentPosition(success, initialValue);
         }
    }
}

function saveLoc(loc) {
    if (savedLocation === null) {
        savedLocation = [loc];
    }
    else if (savedLocation.indexOf(loc) === -1) {
        savedLocation.push(loc);
    }
    //save the new array to localStorage
    localStorage.setItem("cityweather", JSON.stringify(savedLocation));
    // showPrevious();
}

function call_weather() {
    var qURL = api + $(input).val() + api_key + units
    $.ajax({
        url: qURL,
        method: "GET"
    }).then (function (response) {
        currentLoc = response
        saveLoc (currentLoc)
        gotWeather (currentLoc)
    })
    //fetch(url).then(response => response.json()).then(gotWeather)
}

function call_fiveDay() {
    var fiveURL = fiveDayApi + $(input).val() + api_key + units
    $.ajax({
        url: fiveURL,
        method: "GET"
    }).then (function (response) {
        currentLoc = response
        saveLoc (currentLoc)
        fiveDayData (currentLoc)
    })
    //fetch(url).then(response => response.json()).then(fiveDayData)
}

// pulls data puts into weather variable
function gotWeather(data) {
    weather = data
    console.log(data)
    $(".current_city").text(data.name).append(", ").append(data.sys.country)
    // $(".weather_icon").text(data.weather.icon)
    // $(".current_date").text("Today's Date: " + data.dt_txt)
    $(".temp").text(data.main.temp + " ˚F")
    $(".humidity").text("Humidity: " + data.main.humidity + "%")
    $(".wind_speed").text("Wind Speed: " + data.wind.speed + " MPH")
    // $(".uv_index").text("UV-Index: " + data.main.uv)
}

function fiveDayData(data) {
    weather = data
    console.log(data)
    var day = 1
    // Current date for all 5 days
    for (i = 0; i < 40; i++) {
        if (data.list[i].dt_txt.indexOf("3:00:00") !== -1) {
            $(".current_date_" + day).text(data.list[i].dt_txt)
            $(".temp_" + day).text(data.list[i].main.temp + " ˚F")
            $(".humidity_" + day).text("Humidity: " + data.list[i].main.humidity + "%")
            $(".wind_speed_" + day).text("Wind: " + data.list[i].wind.speed + " MPH")
            day++
            console.log(data.list[i])
        }
    }
}
