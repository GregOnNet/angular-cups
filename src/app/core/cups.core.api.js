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

    function create(cupper) {
      return $http.post(api, cupper)
         .then(function(response) {
           snackbar({content: response.data});
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
  }
}());
