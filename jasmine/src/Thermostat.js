function Thermostat(){
  this.temp = 20;
  this.saveMode = true;
}

Thermostat.prototype.increaseTemperature = function(){
  if(this.saveMode && this.temp < 24 || !this.saveMode && this.temp < 32){
    this.temp++;
  };
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temp > 10){
    this.temp--;
  };
}
