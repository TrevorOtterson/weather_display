var weather
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var fiveDayApi = 'http://api.openweathermap.org/data/2.5/forecast?q='
var api_key = '&appid=be5756bbc4a04e806285db783e74b576'
var units = '&units=imperial'
var input

// gets api from call_weather function and creates an on click with user input
var button = $('#button-addon2')
$(button).click(call_weather)
$(button).click(call_fiveDay)
input = $('.form-control')
// let picURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
// let todayPic = $("<div>").attr("class", "col-md-4").append($("<img>").attr("src",picURL).attr("class","card-img"));
// cardRow.append(todayPic);


// calls api information including the city the user types in
function call_weather() {
    var url = api + $(input).val() + api_key + units
    fetch(url).then(response => response.json()).then(gotData)
    
}

function call_fiveDay() {
    var url = fiveDayApi + $(input).val() + api_key + units
    fetch(url).then(response => response.json()).then(gotData)

}

// pulls data puts into weather variable
function gotData(data) {
    weather = data
    console.log(data)
    $(".current_city").text(data.name).append(", ").append(data.sys.country)
    // $(".weather_icon").text(data.weather.icon)
    $(".current_date").text("Today's Date: " + data.dt_txt)
    $(".temp").text("Temperature: " + data.main.temp + " ˚F")
    $(".humidity").text("Humidity: " + data.main.humidity)
    $(".wind_speed").text("Wind Speed: " + data.wind.speed + " MPH")
    // $(".uv_index").text("UV-Index: " + data.main.uv)

    // $(".c3").append(data.symbol.var)
    $(".c3").text("Today's Date: " + data.list.array(0).main.dt_txt)
    $(".c3").text("Temperature: " + data.list.array(0).main.temp)
    $(".c3").text("Humidity: " + data.list.array(0).main.humidity)
    $(".c3").text("Wind Speed: " + data.list.array(0).main.wind)
    // $(".c3").text("UV-Index: " + data.main.uv)
}