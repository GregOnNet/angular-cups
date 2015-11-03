(function() {
  'use strict';

  angular
    .module('cups.core')
    .config(routing);

  routing.$inject = ['$urlRouterProvider'];

  function routing($urlRouterProvider) {
    // Umleitung auf Startseite, wenn keine URL angegebens
    $urlRouterProvider.when('', '/');
    // otherwise besser verwenden, wenn man auf eine
    // 404 Seite umleiten möchte
  }
}());
