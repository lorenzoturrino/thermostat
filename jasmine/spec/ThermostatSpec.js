describe('Thermostat', function(){

  var testThermostat;

  beforeEach(function(){
    testThermostat = new Thermostat();
  });

  describe('#temp', function(){
    it('has a default temp of 20', function(){
      expect(testThermostat.temp).toEqual(20);
    });
  });

  describe('#increaseTemperature', function(){
    it('increases the temp by 1', function(){
      testThermostat.increaseTemperature();
      expect(testThermostat.temp).toEqual(21);
    });
  });

});
