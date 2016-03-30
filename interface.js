$(document).ready(function(){

  var thermo = new Thermostat();

  $("#temp_up").click(function(){
    thermo.increaseTemperature();
    $("#current_temp").text(thermo.temp);
  });

  $("#temp_down").click(function(){
    thermo.decreaseTemperature();
    $("#current_temp").text(thermo.temp);
  });

  $("#toggle_save").click(function(){
    thermo.toggleSaveMode();
    $("#power_save_status").text(function(){
      if (thermo.saveMode){
        return "Power save more: ON";
      }
      else {
        return "Power save more: OFF";
      }
    });
  });
});
