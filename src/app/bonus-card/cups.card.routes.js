(function() {
  'use strict';

  angular
   .module('cups.card')
   .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('card', {
        url: '/card/{matriculationNumber}',
        templateUrl: './bonus-card/card.html',
        controller: 'cardController as card',
        resolve: {
          loadedCupper: cupperPreparation
        }
    });
  }

  cupperPreparation.$inject = ['cupsApi', '$stateParams'];
  function cupperPreparation(cupsApi, $stateParams) {
    return cupsApi.get($stateParams.matriculationNumber);
  }
}());
