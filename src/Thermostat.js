'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 25;
  this.temperature = 20;
  this.powerSavingMode = true;
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
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.togglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
}

module.exports = Thermostat;
