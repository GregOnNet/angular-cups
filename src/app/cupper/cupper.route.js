(function() {
  "use strict";

  angular
    .module('cupper')
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
