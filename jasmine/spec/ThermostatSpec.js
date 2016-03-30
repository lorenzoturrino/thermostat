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
});
