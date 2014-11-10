(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboard',
        controllerAs: 'dashboard'
      });
  }
}());
