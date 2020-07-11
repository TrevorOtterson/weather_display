var weather
var api = 'https://api.openweathermap.org/data/2.5/weather?q='
var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?q='
var api_key = '&appid=be5756bbc4a04e806285db783e74b576'
var units = '&units=imperial'
var input
var currentLoc
var savedLocation = []

// gets api from call_weather function and creates an on click with user input
var button = $('#button-addon2')
$(button).click(call_weather)
$(button).click(call_fiveDay)
input = $('.form-control')

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
}

//saves lacation to localStorage
function saveLoc(loc) {
    if (savedLocation === null) {
        savedLocation = [loc];
    }
    else if (savedLocation.indexOf(loc) === -1) {
        savedLocation.push(loc);
    }
    //save the new array to localStorage
    localStorage.setItem("cityweather", JSON.stringify(savedLocation));
    localRead()
}

function localRead() {
    $("#city_list").empty()
    var savedArray = JSON.parse(localStorage.getItem("cityweather"));
    for (let i = 0; i < savedArray.length; i++) {
        var name = savedArray[i].name
        if (name) {
            $("#city_list").append($('<button type="button" class="btn btn-primary"></button>').text(name))
        }
    }
}
localRead()

// calls current weather api
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
}

// calls 5 day weather api
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
}

// pulls data puts into weather variable
function gotWeather(data) {
    $("#curIcon").empty()
    $(".current_city").empty()
    weather = data
    console.log(data)

    // gets icon and appends to dom
    let picURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    $("#curIcon").append($("<img>").attr("src",picURL).attr("class","card-img"));
    $(".current_city").text(data.name).append(", ").append(data.sys.country)
    // $(".weather_icon").text(data.weather.icon)
    // $(".current_date").text("Today's Date: " + data.dt_txt)
    $(".temp").text(data.main.temp + " ˚F")
    $(".humidity").text("Humidity: " + data.main.humidity + "%")
    $(".wind_speed").text("Wind Speed: " + data.wind.speed + " MPH")
    // $(".uv_index").text("UV-Index: " + data.main.uv)
}

// pushes 5 day api to the dom
function fiveDayData(data) {
    weather = data
    console.log(data)
    var day = 1
    // Current date for all 5 days
    for (i = 0; i < 40; i++) {
        $("#icon_" + day).empty()
        if (data.list[i].dt_txt.indexOf("3:00:00") !== -1) {
            // gets icon and appends to dom
            let picURL = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            $("#icon_" + day).append($("<img>").attr("src",picURL).attr("class","card-img"));
            $(".current_date_" + day).text(data.list[i].dt_txt)
            $(".temp_" + day).text(data.list[i].main.temp + " ˚F")
            $(".humidity_" + day).text("Humidity: " + data.list[i].main.humidity + "%")
            $(".wind_speed_" + day).text("Wind: " + data.list[i].wind.speed + " MPH")
            day++
            console.log(data.list[i])
        }
    }
}
