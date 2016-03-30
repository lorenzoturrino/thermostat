$(document).ready(function(){

  var thermo = new Thermostat();

  updateTemperature = function() {
    $("#current_temp").text(thermo.temp);
    $(".display_box").css("background-color",thermo.energyUsage());
    $("#power_save_status").text(thermo.powerSaveStatus());
  };

  updateTemperature();
  

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
});
