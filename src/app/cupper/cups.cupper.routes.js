(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'cupper/welcomeCupper.html',
        controller: 'cupperController as cupper'
      });
  }

}());
