(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {
    $routeProvider
      .when('/cupper/:matriculationNumber', {
        templateUrl: 'cupper/cupper.html',
        controller: 'cupper'
      })
      .when('/welcome-a-new-cupper', {
        templateUrl: 'cupper/welcomeCupper.html',
        controller: 'welcomeCupper',
        controllerAs: 'welcome'
      });
  }
}());
