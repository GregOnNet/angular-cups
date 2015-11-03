(function() {
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

  CupsApi.$inject = ['$http', 'snackbar'];

  function CupsApi($http, snackbar) {
    var api = '/api/cupper/';

    this.create = create;
    this.getAll = getAll;
    this.get    = get;

    this.drinksACup = drinksACup;
    this.spendAFreeCup = spendAFreeCup;

    function create(cupper) {
      return $http.post(api, cupper)
         .then(function(response) {
           snackbar({content: response.data});
         })
         .catch(function(error) {
           snackbar({content: error.data});
         });
    }

    function get(matriculationNumber) {
      return $http.get(api + matriculationNumber)
         .then(function(response) {
           return response.data;
         })
         .catch(function(error) {
           snackbar({content: error.data});
         });
    }

    function getAll() {
      return $http.get('/api/cuppers')
       .then(function(response) {
         return response.data;
       })
       .catch(function(error) {
         snackbar({content: error.data});
       });
    }

    function drinksACup(cupper) {
      return $http.put(api + 'drinksACup', cupper)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          snackbar({content: error.data});
        });
    }

    function spendAFreeCup(cupper) {
      return $http.put(api + 'getsAFreeCup', cupper)
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          snackbar({content: error.data});
        });
    }
  }
}());
