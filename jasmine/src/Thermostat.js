function Thermostat(){
  this.temp = 20;
}

Thermostat.prototype.increaseTemperature = function(){
  this.temp += 1;
};
