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

  describe('#saveMode', function(){
    it('is on by default', function(){
      expect(testThermostat.saveMode).toEqual(true);
    });
  });

  describe('#increaseTemperature', function(){
    it('increases the temp by 1', function(){
      testThermostat.increaseTemperature();
      expect(testThermostat.temp).toEqual(21);
    });
    it('cannot increase the temp higher than 25 when powersave is on', function(){
      testThermostat.temp = 25;
      testThermostat.saveMode = true;
      testThermostat.increaseTemperature();
      expect(testThermostat.temp).toEqual(25);
    });
    it('cannot increase the temp higher than 32 when powersave is off', function(){
      testThermostat.temp = 23;
      testThermostat.saveMode = false;
      for(t=0;t<10;t++) {
        testThermostat.increaseTemperature();
      };
      expect(testThermostat.temp).toEqual(32);
    });
  });

  describe('#decreaseTemperature', function(){
    it('decreases the temp by 1', function(){
      testThermostat.decreaseTemperature();
      expect(testThermostat.temp).toEqual(19);
    });
    it('cannot decrease the temp lower than 10', function(){
      testThermostat.temp = 10;
      testThermostat.decreaseTemperature();
      expect(testThermostat.temp).toEqual(10);
    });
  });
});
