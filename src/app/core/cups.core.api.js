(function() {
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

  CupsApi.$inject = ['$http', 'snackbar'];

  function CupsApi($http, snackbar) {
    var api = '/api/cupper/';

    this.create = create;

    function create(cupper) {
      $http.post(api, cupper)
           .then(function(response) {
             snackbar({content: response.data});
           })
           .catch(function(error) {
             snackbar({content: error.data});
           });
    }
  }
}());
