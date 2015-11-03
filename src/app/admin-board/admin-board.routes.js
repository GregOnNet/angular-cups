(function() {
  'use strict';

  angular
    .module('cups.admin')
    .config(defineRoutes);

  defineRoutes.$inject = ['$stateProvider'];

  function defineRoutes($stateProvider) {
    $stateProvider
      .state('admin-board', {
        url: '/admin',
        templateUrl: 'admin-board/board.html',
        controller: 'boardController as board',
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
