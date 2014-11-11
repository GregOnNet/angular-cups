'use strict';

module.exports = function(name, matriculationNumber){
	this.name = name || 'anonymous';
	this.matriculationNumber = matriculationNumber || 'None';
	this.drunkenCups = 0;
	this.getsAFreeCup = false;
};
