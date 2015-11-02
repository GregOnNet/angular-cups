(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboard', dashboard);

  dashboard.$inject = ['cuppersPreparation'];

  function dashboard(cuppersPreparation){
    var vm = this;

    vm.cuppers = cuppersPreparation;
  }
}());
