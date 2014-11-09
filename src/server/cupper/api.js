'use strict';

var cuppers = [];

exports.get = function(req, res) {

  res.json({
    cuppers : cuppers });

};

exports.post = function(req, res) {

  if (req.body.cupper) {

    cuppers.push(req.body.cupper);
    res.status(201).send('Created');

  }
  else {

    res.status(400).send('There was no cupper defined!');

  }
};
