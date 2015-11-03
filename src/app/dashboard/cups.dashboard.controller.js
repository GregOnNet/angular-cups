(function() {
  'use strict';

  angular
   .module('cups.dashboard')
   .controller('dashboardController', DashboardController);

  DashboardController.$inject = ['cupsApi'];
  function DashboardController(cupsApi) {
    var vm = this;

    vm.cuppers = [];
    vm.getAll = getAll;

    getAll();

    function getAll() {
      cupsApi.getAll()
             .then(function(cuppers){
               console.log(cuppers);
               vm.cuppers = cuppers;
             });
    }

  }
}());
