function WeatherHelper() {
  this.weatherData = null;
  this.APIrequest = {
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      id: "2643743",
      APPID: "56a7e4bcc7d436424e8503f16f6f8cec"
    },
    type: "GET"
  };

}

WeatherHelper.prototype.weatherWriter = function(data) {
  window.alert(data.name)
}

WeatherHelper.prototype.getWeather = function() {
  var current = this;
  $.getJSON(this.APIrequest, this.weatherWriter)
};
