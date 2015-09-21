(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboard', dashboard);

  dashboard.$inject = ['cupper'];

  function dashboard(cupper){
    var vm = this;

    vm.cuppers = [];
    vm.getAll = getAll;

    getAll();

    function getAll(){
      return cupper.getAll().then(function(cuppers){
        vm.cuppers = cuppers;
        return vm.cuppers;
      });
    }
  }
}());
