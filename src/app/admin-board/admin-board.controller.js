(function() {
  'use strict';

  angular
    .module('cups.admin')
    .controller('boardController', boardController);

  boardController.$inject = ['cuppersPreparation'];

  function boardController(cuppersPreparation){
    var vm = this;

    vm.cuppers = cuppersPreparation;
  }
}());
