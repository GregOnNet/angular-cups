(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    .config(defineRoutes);

  defineRoutes.$inject = ['$stateProvider'];

  function defineRoutes($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'dashboard/dashboard.html',
        controller: 'dashboard as dashboard',
        resolve: {
          cuppersPreparation : cuppersPreparation
        }
      });
  }

  cuppersPreparation.$inject = ['cupper'];
  function cuppersPreparation(cupper) {
    return cupper.getAll();
  }
}());
