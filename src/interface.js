var thermostat = new Thermostat();

$( document ).ready(function () {
  display();
  var requestUrl = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    appid: 'e78eae9d558ce82d7f280b91150af623',
    id: 2643743,
    units: 'metric'
  };
  $.getJSON(requestUrl, data, updateWeather);
  function updateWeather(weatherData) {
    var cityName, weather, wind, temperature, iconUrl;
    cityName = weatherData.name;
    weather = weatherData.weather[0].description;
    wind = "The wind is blowing at " +
            weatherData.wind.speed +
            " from " +weatherData.wind.deg +
            " degrees";
    temperature = weatherData.main.temp + 'ºC';
    iconUrl = 'http://openweathermap.org/img/w/' +
              weatherData.weather[0].icon + '.png';
    $('#name').html(cityName);
    $('#weather').html(weather);
    $('#wind').html(wind);
    $('#outside-temperature').html(temperature);
    $('#weather-icon').attr('src', iconUrl);
  }
  $('#increase').click(function () {
    thermostat.increase();
    display();
  });

  $('#decrease').click(function () {
    thermostat.decrease();
    display();
  });

  $('#reset').click(function () {
    thermostat.resetTemperature();
    display();
  });

  $('#PSM').click(function() {
    thermostat.powerSavingMode();
    $(this).toggleClass('toggle-button-selected');
    display();
  });

  function display(){
    $('#temperature').html(thermostat.temperature + 'ºC');

    if(thermostat.energyUsage === 'medium') {
      setColor('#98f5c8');
    } else if(thermostat.energyUsage === 'low') {
      setColor('#98d6f4');
    } else {
      setColor('#f9a72a');
    }
    function setColor(color) {
      $('#screen').css('background-color', color);
    }
  }
});
