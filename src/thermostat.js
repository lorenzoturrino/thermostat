function Thermostat(defaultTemp = 20) {
  this._defaultTemperature = defaultTemp
  this.temperature         = this._defaultTemperature;
  this.isSavingPower       = true;
  this._minTemperature     = 10
  this._savingPowerMax     = 25;
  this._noSavingPowerMax   = 32;
  this.colour              = 'yellow'
}

Thermostat.prototype.increase = function () {
  if(this.temperature === this.maxTemp()){
    throw new Error('BOOP');
  }
    this.temperature++;
    this._defineColour();
};

Thermostat.prototype.decrease = function () {
  if(this.temperature === this._minTemperature){
    throw new Error('BEEP');
  }
    this.temperature--;
    this._defineColour();
  };

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this._defaultTemperature
  this._defineColour();
};

Thermostat.prototype.powerSavingMode = function () {
  this.isSavingPower = !this.isSavingPower;
};

Thermostat.prototype.maxTemp = function () {
  if(this.isSavingPower){
    return this._savingPowerMax;
  }  else {
    return this._noSavingPowerMax;
  }
};

Thermostat.prototype._defineColour = function () {
  if(this.temperature > 25){
    this.colour = 'red';
  } else if (this.temperature > 18) {
    this.colour = 'yellow';
  } else {
    this.colour = 'green';
  }
};
