(function() {
  'use strict';

  angular
    .module('cups.core')
    .factory('cupper', cupper);

  cupper.$inject = ['$http', 'snackbar'];

  function cupper($http, snackbar) {
    var api = '/api/';

    return {
      getAll : getAll,
      create : create
    };

    function getAll() {

      return $http
        .get(api + 'cuppers')
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response){
        
        return response.data;
      }

      function callCrashed(error){

        snackbar({ 'content' : error });
      }
    }

    function create(cupper) {

      return $http
        .post(api + 'cupper', cupper)
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response) {

        snackbar({ 'content' : response.data });
        return response.data;
      }

      function callCrashed(error) {

        snackbar({ 'content' : error });
      }
    }
  }
}());
