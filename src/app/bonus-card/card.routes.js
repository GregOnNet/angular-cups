(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {
    $routeProvider
      .when('/card/:id', {
        templateUrl: 'bonus-card/card.html',
        controller: 'bonusCard',
        controllerAs: 'card'
      });
  }
}());
