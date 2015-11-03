(function() {
  'use strict';

   angular
     .module('cups.cupper')
     .controller('cupperController', CupperController);

  CupperController.$inject = ['$http'];

  function CupperController($http) {
    var vm = this;

    vm.identity = {};
    vm.create = create;

    function create() {
      $http.post('/api/cupper', vm.identity)
           .then(function(response) {
             console.info(response);
           })
           .catch(function(error) {
             console.error(error);
           });
    }
  }
}());
