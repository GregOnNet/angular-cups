# angular-cups

A demo app to get started with AngularJS. It allows users (aka cuppers) to collect bonus points for each drunken cup of coffee.

## Getting started

Run the following commands from the angular-cups root directory to install all needed dependencies

1. `bower install`
2. `cd src/server && npm install`

## Start the demo

Run `server.js` to start the web server @ [http://localhost:8080](http://localhost:8080).

1. `node src/server/server.js`

## Documentation

### Cups-API

get All                                      '/api/cuppers'

get ByMatriculationNumber     '/api/cupper/:matriculationNumber'

post create cupper                 '/api/cupper'

put drinking a cup                  ‘/api/cupper/drinksACup'
put getting a free cup             '/api/cupper/getsAFreeCup’

### Calling the API with AngularJS

cupper.core -> ngRoute
cupper.constants -> snackbar

cupper -> $http, snackbar
- create(cupper)
- getBy(matriculationNumber)
- getAll()
- drinksACup(cupper)
- getsAFreeCup(cupper)

## License
[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
