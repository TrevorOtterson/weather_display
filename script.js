var weather
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var fiveDayApi = 'http://api.openweathermap.org/data/2.5/forecast?q='
var api_key = '&appid=be5756bbc4a04e806285db783e74b576'
var units = '&units=imperial'
var input
var curContainer = $('container2')
var fiveDayCol = $('.c3')

// gets api from call_weather function and creates an on click with user input
var button = $('#button-addon2')
$(button).click(call_weather)
$(button).click(call_fiveDay)
input = $('.form-control')
// let picURL = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
// let todayPic = $("icon").append($("<img>").attr("src",picURL).attr("class","card-img"));
// fiveDaycol.append(todayPic);

// calls api information including the city the user types in
function call_weather() {
    var url = api + $(input).val() + api_key + units
    fetch(url).then(response => response.json()).then(gotWeather)
    
}

function call_fiveDay() {
    var url = fiveDayApi + $(input).val() + api_key + units
    fetch(url).then(response => response.json()).then(fiveDayData)

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

    // Current date for all 5 days
    for (day = 0; day < 40; day++) {
        $(".current_date_" + day).text(data.list[day].dt_txt);
    }

    // Temperature for all 5 days
    for (day = 0; day < 40; day++) {
        $(".temp_" + day).text(data.list[day].main.temp + " ˚F")
    }

    // Humidity for all 5 days
    for (day = 0; day < 40; day++) {
        $(".humidity_" + day).text("Humidity: " + data.list[day].main.humidity + "%");
    }

    // wind speed for all 5 days
    for (day = 0; day < 40; day++) {
        $(".wind_speed_" + day).text("Wind: " + data.list[day].wind.speed + " MPH");
    }
}
