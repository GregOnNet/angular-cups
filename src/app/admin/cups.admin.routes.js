(function() {
  'use strict';

  angular
   .module('cups.admin')
   .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: './admin/cups.admin.html',
        controller: 'adminController as admin',
        resolve: {
          adminPreperation : adminPreperation
        }
      });
  }

  adminPreperation.$inject = ['cupsApi'];
  function adminPreperation(cupsApi) {
    return cupsApi.getAll();
  }
}());
