(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .controller('card', card);

  card.$inject = ['$routeParams', 'cupper'];

  function card($routeParams, cupper) {

    var card = this;
    var matriculationNumber = $routeParams.matriculationNumber;

    card.cupper = {};
    card.getCupper = getCupper;
    card.stamp = stamp;
    card.spendAFreeCup = spendAFreeCup;

    getCupper();

    function getCupper() {

      return cupper
        .getBy(matriculationNumber)
        .then(function(cupper){

          card.cupper = cupper;
          return card.cupper;
        });
    }

    function stamp(){
      return cupper
        .drinksACup(card.cupper)
        .then(function(cupper){

          card.cupper = cupper;
          return card.cupper;
        });
    }

    function spendAFreeCup(){
      return cupper
        .getsAFreeCup(card.cupper)
        .then(function(cupper){

          card.cupper = cupper;
          return card.cupper;
        });
    }
  }
}());
