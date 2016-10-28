'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.MAXIMUM_TEMPERATURE_POWER_SAVE = 25;
  this.MAXIMUM_TEMPERATURE_NO_POWER_SAVE = 32;
  this.maximumTemperature = this.MAXIMUM_TEMPERATURE_POWER_SAVE;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}


Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMPERATURE_POWER_SAVE) {
    return 'medium-usage';
  }
    return 'high-usage';
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.upButton = function () {
  if (this._isMaximumTemperature()){
    throw new Error("Thermostat at maximum")
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.downButton = function () {
  if (this._isMinimumTemperature()){
    throw new Error("Thermostat at minimum")
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype._isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype._isMaximumTemperature = function () {
  return this.temperature === this.maximumTemperature;
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if(this.powerSavingMode === false) {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_NO_POWER_SAVE;
  } else {
    this.maximumTemperature = this.MAXIMUM_TEMPERATURE_POWER_SAVE;
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
