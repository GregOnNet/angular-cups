(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {
    $routeProvider.
      when('/cupper/:matriculationNumber', {
        templateUrl: 'cupper/cupper.html',
        controller: 'cupper'
      });
  }
}());
