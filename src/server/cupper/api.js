'use strict';

var Cupper = require('./model');

var cuppers = [];

exports.get = function(req, res) {

  res.json(cuppers);

};

exports.post = function(req, res) {

  var data = req.body || {};
  var cupper = new Cupper(data.name, data.matriculationNumber);

  cuppers.push(cupper);
  res.status(201).send('Created');
};
