(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {
    $routeProvider
      .when('/card/:matriculationNumber', {
        templateUrl: 'bonus-card/card.html',
        controller: 'card',
        controllerAs: 'card'
      });
  }
}());
