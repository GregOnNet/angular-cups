'use strict';

var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');

var app    = express();
var router = express.Router();

var cupper = require('./cupper/api');

app.use(express.static(path.join(__dirname , '..' , 'app')));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// localhost:8080/api/cuppers
router.get('/cuppers', cupper.get);
router.get('/cupper/:matriculationNumber', cupper.getByMatriculationNumber);

router.post('/cupper', cupper.post);
router.put('/cupper/drinksACup', cupper.drinksACup);
router.put('/cupper/getsAFreeCup', cupper.getsAFreeCup);
router.delete('/cupper/:matriculationNumber', cupper.delete);

app.use('/api', router);

app.listen(8080);
console.log('Listening on port http://localhost:8080...');
