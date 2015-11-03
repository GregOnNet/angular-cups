(function() {
  'use strict';

  angular
   .module('cups.card')
   .controller('cardController', CardController);

  CardController.$inject = ['loadedCupper', 'cupsApi'];
  function CardController(loadedCupper, cupsApi) {
    var vm = this;

    vm.cupper = loadedCupper;
    vm.stamp = stamp;
    vm.spendAFreeCup = spendAFreeCup;

    function stamp() {
      cupsApi
        .drinksACup(vm.cupper)
        .then(updateCupper);
    }

    function spendAFreeCup() {
      cupsApi
        .spendAFreeCup(vm.cupper)
        .then(updateCupper);
    }

    function updateCupper(cupper) {
      vm.cupper = cupper;
    }
  }
}());
