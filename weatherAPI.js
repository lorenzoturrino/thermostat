var weatherData;
var notParsedJson;

var request = {
  url: "http://api.openweathermap.org/data/2.5/weather",
  data: {
    id: "2643743",
    APPID: "YOURAPI"
  },
  type: "GET",
  dataType: "json"
};

$.ajax(request).done(function(remoteData){
  notParsedJson = remoteData;
});

$("#weather_result").text(notParsedJson);
