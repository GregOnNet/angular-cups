(function() {
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

  CupsApi.$inject = ['$http', 'snackbar'];

  function CupsApi($http, snackbar) {
    var api = '/api/cupper/';

    this.create = create;
    this.remove = remove;
    this.getAll = getAll;
    this.get    = get;

    this.drinksACup = drinksACup;
    this.spendAFreeCup = spendAFreeCup;

    function create(cupper) {
      return $http.post(api, cupper)
         .then(showResponseMessage)
         .catch(showResponseMessage);
    }

    function get(matriculationNumber) {
      return $http.get(api + matriculationNumber)
         .then(returnResponse)
         .catch(showResponseMessage);
    }

    function remove(matriculationNumber) {
      return $http.delete(api + matriculationNumber)
         .then(showResponseMessage)
         .catch(showResponseMessage);
    }

    function getAll() {
      return $http.get('/api/cuppers')
       .then(returnResponse)
       .catch(showResponseMessage);
    }

    function drinksACup(cupper) {
      return $http.put(api + 'drinksACup', cupper)
        .then(returnResponse)
        .catch(showResponseMessage);
    }

    function spendAFreeCup(cupper) {
      return $http.put(api + 'getsAFreeCup', cupper)
        .then(returnResponse)
        .catch(showResponseMessage);
    }

    function returnResponse(response) {
      return response.data;
    }

    function showResponseMessage(response) {
      snackbar({content: response.data});
      return response.data;
    }
  }
}());
