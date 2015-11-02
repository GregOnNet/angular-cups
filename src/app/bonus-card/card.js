(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .controller('card', card);

  card.$inject = ['$stateParams', 'cupper'];

  function card($stateParams, cupper) {

    var bcard = this;
    var matriculationNumber = $stateParams.matriculationNumber;

    bcard.cupper = {};
    bcard.getCupper = getCupper;
    bcard.stamp = stamp;
    bcard.spendAFreeCup = spendAFreeCup;

    getCupper();

    function getCupper() {

      return cupper
        .getBy(matriculationNumber)
        .then(function(cupper){

          bcard.cupper = cupper;
          return bcard.cupper;
        });
    }

    function stamp(){
      return cupper
        .drinksACup(bcard.cupper)
        .then(function(cupper){

          bcard.cupper = cupper;
          return bcard.cupper;
        });
    }

    function spendAFreeCup(){
      return cupper
        .getsAFreeCup(bcard.cupper)
        .then(function(cupper){

          bcard.cupper = cupper;
          return cupper;
        });
    }
  }
}());
