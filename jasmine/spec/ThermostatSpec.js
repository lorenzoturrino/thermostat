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

  describe('#decreaseTemperature', function(){
    it('decreases the temp by 1', function(){
      testThermostat.decreaseTemperature();
      expect(testThermostat.temp).toEqual(19);
    });
    it('cannot decrease the temp lower than 10', function(){
      testThermostat.temp = 10;
      expect(testThermostat.temp).toEqual(10);
    });
  });
});
