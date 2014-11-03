(function() {
  "use strict";

  angular
    .module('cups.cupper')
    .run(defineRoutes);

  defineRoutes.$inject = ['$routerProvider'];

  function defineRoutes($routerProvider) {
    $routeProvider.
      when('/cupper/:matriculationNumber', {
        templateUrl: 'cupper/cupper.html',
        controller: 'cupper'
      });
  }
}());
