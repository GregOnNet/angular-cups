(function() {
  'use strict';

  angular
   .module('cups.dashboard')
   .config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });
  }
}());
