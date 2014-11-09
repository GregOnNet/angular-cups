(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .factory('cupper', cupper);

  cupper.$inject = ['$http'];

  function cupper($http) {
    var api = '/api/';

    return {
      getAll : getAll,
      create : create
    };

    function getAll() {
      $http
        .get(api + 'cuppers')
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response){
        return response.data;
      }

      function callCrashed(error){
        console.log(error);
      }
    }

    function create(cupper) {
      $http
        .post(api + 'cupper', cupper)
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response){
        return response.data;
      }

      function callCrashed(error){
        console.log(error);
      }
    }
  }
}());
