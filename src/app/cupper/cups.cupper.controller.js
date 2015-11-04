(function() {
  'use strict';

   angular
     .module('cups.cupper')
     .controller('cupperController', CupperController);

  CupperController.$inject = ['$scope', 'cupsApi'];

  function CupperController($scope, cupsApi) {
    var vm = this;

    vm.identity = {};
    vm.create = create;

    function create() {
      cupsApi.create(vm.identity)
             .then(function(cupper) {
               vm.identity = cupper;
               $scope.$emit('Created', 'Cupper was created successfully!');
             });
    }
  }
}());
