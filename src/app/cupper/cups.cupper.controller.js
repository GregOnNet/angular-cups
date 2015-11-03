(function() {
  'use strict';

   angular
     .module('cups.cupper')
     .controller('cupperController', CupperController);

  CupperController.$inject = ['cupsApi'];

  function CupperController(cupsApi) {
    var vm = this;

    vm.identity = {};
    vm.create = create;

    function create() {
      cupsApi.create(vm.identity);
    }
  }
}());
