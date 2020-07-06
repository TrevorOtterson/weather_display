I developed this program that lets the user type any city in the world, and recieve back weather information. It displays current weather and the next 5 days. It stores the previous cities searched in the side so you can refer back to it. I used the OpenWeather API to get this data using JSON and fetch() I was able to use the API.

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

# Website

<img src="./images/img1.png" alt="Project page screenshot" width="300"/>
<img src="./images/img2.png" alt="Project page screenshot" width="300"/>
<img src="./images/img3.png" alt="Project page screenshot" width="300"/>

<a>https://trevorotterson.github.io/weather_display/</a>