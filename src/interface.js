var thermostat = new Thermostat();

$( document ).ready(function () {
  display();

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
    if(thermostat.energyUsage === 'high') {
      $('#screen').css('background-color', 'rgba(255, 0, 0, 0.5)');
    } else if(thermostat.energyUsage === 'low') {
      $('#screen').css('background-color', 'rgba(0, 0, 255, 0.5)');
    } else if(thermostat.energyUsage === 'medium') {
      $('#screen').css('background-color', '#98f5c8');
    }
}

});
