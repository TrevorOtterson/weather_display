var weather
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var api_key = '&appid=be5756bbc4a04e806285db783e74b576'
var units = '&units=metric'
var input

// gets api from call_weather function and creates an on click with user input
function get_api() {
    var button = select('#button-addon2')
    $(button).click(call_weather)
    input = select('.form-control')
}

// calls api information including the city the user types in
function call_weather() {
    var url = api + input.value() + api_key + units
    loadJSON(url, gotData)
}

// pulls data puts into weather variable
function gotData(data) {
    weather = data
}

// appends to current weather container
function printData() {
    if (weather) {
        var temp = weather.main.temp
        var humidity = weather.main.humidity
        (".container2").append(temp)
        (".container2").append(humidity)
    }
}