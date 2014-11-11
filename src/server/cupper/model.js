'use strict';

module.exports = function(name, matriculationNumber, drunkenCups){
	this.name = name || 'anonymous';
	this.matriculationNumber = matriculationNumber || 'None';
	this.drunkenCups = drunkenCups || 0;
};
