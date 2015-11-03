'use strict';

var Cupper = require('./model');

var cuppers = [];

exports.get = function(req, res) {

  res.json(cuppers);

};

exports.getByMatriculationNumber = function(req, res) {

  var foundCuppers = cuppers.filter(function(cupper) {
    return cupper.matriculationNumber === req.params.matriculationNumber;
  });

  if (foundCuppers.length === 1)
    res.json(foundCuppers[0]);

  else if (foundCuppers.length === 0)
    res
    .status(404)
    .send('There is no cupper matching the given matriculation number.');

  else
    res
    .status(409)
    .send('There more than one cupper with the same matriculation number.');

};

exports.post = function(req, res) {

  var data = req.body || {};
  var cupper = new Cupper(data.name, data.matriculationNumber);

  cuppers.push(cupper);
  res.status(201).send('Created');
};

exports.delete = function(req, res) {
  var foundCuppers = cuppers.filter(function(cupper) {
    return cupper.matriculationNumber === req.params.matriculationNumber;
  });

  if (foundCuppers.length === 1) {
    cuppers = cuppers.filter(function(cupper) {
      return cupper.matriculationNumber !== req.params.matriculationNumber;
    });

    res.status(200)
       .send('Cupper was deleted successfully.');
  } else if (foundCuppers.length === 0)
    res
    .status(404)
    .send('There is no cupper matching the given matriculation number.');
};

exports.drinksACup = function(req, res) {

  var foundCuppers = cuppers.filter(function(cupper) {
    return cupper.matriculationNumber === req.body.matriculationNumber;
  });

  if (foundCuppers.length === 1) {

    foundCuppers[0].drunkenCups++;

    if (foundCuppers[0].drunkenCups === 10)
      foundCuppers[0].getsAFreeCup = true;

    res.status(200).send(foundCuppers[0]);
  } else
    res
    .status(404)
    .send('There is no cupper matching the given matriculation number.');
};

exports.getsAFreeCup = function(req, res) {

  var foundCuppers = cuppers.filter(function(cupper) {
    return cupper.matriculationNumber === req.body.matriculationNumber;
  });

  if (foundCuppers.length === 1) {

    foundCuppers[0].drunkenCups = 0;
    foundCuppers[0].getsAFreeCup = false;

    res.status(200).send(foundCuppers[0]);
  } else
    res
    .status(404)
    .send('There is no cupper matching the given matriculation number.');
};
