(function() {
  'use strict';

  angular
    .module('cups.core')
    .factory('cupper', cupper);

  cupper.$inject = ['$http', 'snackbar'];

  function cupper($http, snackbar) {
    var api = '/api/';

    return {
      getBy        : getBy,
      getAll       : getAll,
      create       : create,
      remove       : remove,
      drinksACup   : drinksACup,
      getsAFreeCup : getsAFreeCup
    };

    function getBy(matriculationNumber){
      return $http
        .get(api + 'cupper/' + matriculationNumber)
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response){

        return response.data;
      }

      function callCrashed(error){

        snackbar({ 'content' : error.data });
      }
    }

    function remove(matriculationNumber){
      return $http
        .delete(api + 'cupper/' + matriculationNumber)
        .then(deletionSucceeded)
        .catch(deletionFailed);

      function deletionSucceeded(response){

        snackbar({ 'content' : response.data });
      }

      function deletionFailed(error){

        snackbar({ 'content' : error.data });
      }
    }

    function getAll() {

      return $http
        .get(api + 'cuppers')
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response){

        return response.data;
      }

      function callCrashed(error){

        snackbar({ 'content' : error.data });
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

        snackbar({ 'content' : error.data });
      }
    }

    function drinksACup(cupper) {

      return $http
        .put(api + 'cupper/drinksACup', cupper)
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response) {

        return response.data;
      }

      function callCrashed(error) {

        snackbar({ 'content' : error.data });
      }
    }

    function getsAFreeCup(cupper) {

      return $http
        .put(api + 'cupper/getsAFreeCup', cupper)
        .then(callSucceeded)
        .catch(callCrashed);

      function callSucceeded(response) {

        return response.data;
      }

      function callCrashed(error) {

        snackbar({ 'content' : error.data });
      }
    }
  }
}());
