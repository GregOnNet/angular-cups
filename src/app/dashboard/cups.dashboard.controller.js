(function() {
  'use strict';

  angular
   .module('cups.dashboard')
   .controller('dashboardController', DashboardController);

  DashboardController.$inject = ['cuppersPreparation'];
  function DashboardController(cuppersPreparation) {
    var vm = this;

    vm.cuppers = cuppersPreparation;

    // getAll();
    //
    // function getAll() {
    //   cupsApi
    //      .getAll()
    //      .then(function(cuppers){
    //        vm.cuppers = cuppers;
    //      });
    // }
  }
}());
