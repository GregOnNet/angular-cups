(function() {
  'use strict';

  angular
    .module('cups.core')
    .config(routing);

  routing.$inject = ['$urlRouterProvider'];

  function routing($urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');
  }
}());
