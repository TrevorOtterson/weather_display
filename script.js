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

function fiveDayData(data5) {
    weather = data5
    console.log(data5)
    //$(".current_date_1").text("Today's Date: " + data.list[1].dt_txt)
    for (day = 0; day < 6; day++) {
        $(".current_date_" + day).text(data5.list[day].dt_txt);
    }
    //$(".temp_1").text(data.list[1].main.temp)
    for (day = 0; day < 6; day++) {
        $(".temp_" + day).text(data5.list[day].main.temp + " ˚F");
    }
    // $(".humidity_1").text("Humidity: " + data.list[1].main.humidity)
    for (day = 0; day < 6; day++) {
        $(".humidity_" + day).text(data5.list[day].main.humidity + "%");
    }
    // $(".wind_speed_1").text("Wind Speed: " + data.list[1].wind.speed + " MPH")
    for (day = 0; day < 6; day++) {
        $(".wind_speed_" + day).text(data5.list[day].wind.speed + " MPH");
    }
    // $(".current_date_2").text("Today's Date: " + data.list[2].dt_txt)
    // $(".temp_2").text(data.list[2].main.temp)
    // $(".humidity_2").text("Humidity: " + data.list[2].main.humidity)
    // $(".wind_speed_2").text("Wind Speed: " + data.list[2].wind.speed + " MPH")

    // $(".current_date_3").text("Today's Date: " + data.list[3].dt_txt)
    // $(".temp_3").text(data.list[3].main.temp)
    // $(".humidity_3").text("Humidity: " + data.list[3].main.humidity)
    // $(".wind_speed_3").text("Wind Speed: " + data.list[3].wind.speed + " MPH")

    // $(".current_date_4").text("Today's Date: " + data.list[4].dt_txt)
    // $(".temp_4").text(data.list[4].main.temp)
    // $(".humidity_4").text("Humidity: " + data.list[4].main.humidity)
    // $(".wind_speed_4").text("Wind Speed: " + data.list[4].wind.speed + " MPH")

    // // $(".c3").append(data.symbol.var)
    // $(".current_date_5").text("Today's Date: " + data.list[5].dt_txt)
    // $(".temp_5").text(data.list[5].main.temp)
    // $(".humidity_5").text("Humidity: " + data.list[5].main.humidity)
    // $(".wind_speed_5").text("Wind Speed: " + data.list[5].wind.speed + " MPH")
    // // $(".c3").text("UV-Index: " + data.main.uv)
}
