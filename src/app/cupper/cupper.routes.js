(function() {
  'use strict';

  angular
   .module('cups.cupper')
   .config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {
    $routeProvider
      .when('/welcome', {
        templateUrl: 'cupper/welcomeCupper.html',
        controller: 'CupperController',
        controllerAs: 'welcome'
      });
  }
}());
