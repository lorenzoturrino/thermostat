function Thermostat(){
  this.temp = 20;
  this.saveMode = true;
}

Thermostat.prototype.increaseTemperature = function(){
  if(this.saveMode && this.temp < 24 || !this.saveMode && this.temp < 32){
    this.temp++;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temp > 10){
    this.temp--;
  }
};

Thermostat.prototype.reset = function(){
  this.temp = 20;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temp < 18){
    return 'green';
  }
  else if (this.temp >= 18 && this.temp < 24){
    return 'yellow';
  }
  else {
    return 'red';
  }
};

Thermostat.prototype.toggleSaveMode = function(){
  this.saveMode = !this.saveMode;
};

Thermostat.prototype.powerSaveStatus = function(){
  if(this.saveMode){
    return 'Power Save mode: ON';
  }
  else {
    return 'Power Save mode: OFF';
  }
};
