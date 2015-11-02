(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .config(defineRoutes);

  defineRoutes.$inject = ['$stateProvider'];

  function defineRoutes($stateProvider) {
    $stateProvider
      .state('bonus-card', {
        url: '/card/:matriculationNumber',
        templateUrl: 'bonus-card/card.html',
        controller: 'card as card'
      });
  }
}());
