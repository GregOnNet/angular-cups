(function() {
  'use strict';

  angular
   .module('cups.dashboard')
   .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboardController as dashboard',
        resolve: {
          cuppersPreparation : cuppersPreparation
        }
      });
  }

  cuppersPreparation.$inject = ['cupsApi'];
  function cuppersPreparation(cupsApi) {
    return cupsApi.getAll();
  }
}());
