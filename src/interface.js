$(document).ready(function(){

  var thermo = new Thermostat();
  var weather = new WeatherHelper();

  updateTemperature = function() {
    $("#current_temp").text(thermo.temp);
    $(".display_box").css("background-color",thermo.energyUsage());
    $("#power_save_status").text(thermo.powerSaveStatus());
  };

  updateWeather = function() {
    weather.getWeather();
    $("#city").text("Current Weather in " + weather.weatherData.name);
    $("#current_weather").text("wow");
    $("#wind").text("wow");
  };

  startUp = function() {
    updateTemperature();
    updateWeather();
  };


  $("#temp_up").click(function(){
    thermo.increaseTemperature();
    updateTemperature();
  });

  $("#temp_down").click(function(){
    thermo.decreaseTemperature();
    updateTemperature();
  });

  $("#toggle_save").click(function(){
    thermo.toggleSaveMode();
    updateTemperature();
  });

  startUp();
});
