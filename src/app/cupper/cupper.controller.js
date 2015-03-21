(function() {
  'use strict';

  angular
   .module('cups.cupper')
   .controller('CupperController', CupperController);

  CupperController.$inject = ['$http'];

  function CupperController($http) {
    var vm = this;

    vm.cupper = {};
    vm.newCupper = newCupper;

    function newCupper() {

      $http.post('/api/cupper', vm.cupper)
        .success(function(){
          console.log('Created');
        })
        .error(function(){
          console.log('Error');
        });
    }
  }
}());
