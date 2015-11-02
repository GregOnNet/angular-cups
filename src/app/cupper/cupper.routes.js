(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .config(defineRoutes);

  defineRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function defineRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'cupper/welcomeCupper.html',
        controller: 'welcomeCupper as welcome'
      });

    $urlRouterProvider
      .when('/cupper/create', '/welcome');
  }
}());
