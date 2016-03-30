describe('Thermostat', function () {
  var thermostat, temp;

  beforeEach(function () {
    thermostat = new Thermostat();
    temp = thermostat._defaultTemperature;
  });

  it('has a default temp of 20ºC', function () {
    expect(thermostat.temperature).toEqual(temp);
  });

  describe('change temperature', function () {
    it('increases the temperature by 1ºC', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(temp + 1);
    });

    it('decreases the temperature by 1ºC', function () {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(temp - 1);
    });

    it('resets the temperature to 20ºC', function () {
      thermostat.decrease();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(temp);
    });
  });

  describe('temperature limits', function () {
    it('has a minimum temperature of 10 ºC', function () {
      for(var i = 1; i <= 10; i++) { thermostat.decrease(); }
      var toMin = function() { thermostat.decrease();};
      expect(toMin).toThrowError('BEEP');
    });

    describe('power saving mode', function () {
      it('is on by default', function () {
        expect(thermostat.isSavingPower).toBe(true);
      });

      it('toggles power saving mode', function () {
        thermostat.powerSavingMode();
        expect(thermostat.isSavingPower).toBe(false);
        thermostat.powerSavingMode();
        expect(thermostat.isSavingPower).toBe(true);
      });

      describe('max temperature', function () {
        it('is 25 ºC when saving power', function () {
          thermostat.temperature = 25;
          var toMax = function () { thermostat.increase(); };
          expect(toMax).toThrowError('BOOP');
        });

        it('is 32 ºC when not saving power', function () {
          thermostat.temperature   = 32;
          thermostat.isSavingPower = false;
          var toMax = function () { thermostat.increase(); };
          expect(toMax).toThrowError('BOOP');
        });
      });
    });
  });

  describe('thermostat colour', function () {
    it('is green when less than 18ºC', function () {
      thermostat.temperature = 15;
      thermostat.decrease();
      expect(thermostat.colour).toBe('green');
    });
  });
});
