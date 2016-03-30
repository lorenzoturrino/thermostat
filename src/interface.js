var thermostat = new Thermostat();

$( document ).ready(function () {
  display()

  $('#increase').click(function () {
    thermostat.increase();
    display()
  });

  $('#decrease').click(function () {
    thermostat.decrease();
    display()
  });

  $('#reset').click(function () {
    thermostat.resetTemperature();
    display()
  });

  $('#PSM').click(function() {
    thermostat.powerSavingMode();
    $(this).toggleClass('toggle-button-selected');
  });

  function display(){
    $('#temperature').html(thermostat.temperature + 'ºC');
  }

});
