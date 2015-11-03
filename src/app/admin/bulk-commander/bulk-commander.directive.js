(function() {
  'use strict';

  angular
    .module('cups.admin')
    .directive('bulkCommander', bulkCommander);

  function bulkCommander() {
    return {
      scope: {
        cuppers: "="
      },
      templateUrl: './admin/bulk-commander/bulk-commander.directive.tpl.html',
      controller: controller,
      controllerAs: 'commander',
      bindToController: true
    };
  }

  controller.$inject = ['cupsApi'];
  function controller(cupsApi) {
    var vm = this;

    vm.getAll = getAll;

    vm.checkAll = checkAll;
    vm.removeSelected = removeSelected;

    function checkAll(isChecked) {
      angular.forEach(vm.cuppers, function(cp) {
        cp.isChecked = isChecked;
      });
    }

    function getAll() {
      cupsApi.getAll()
        .then(function(cuppers){
          vm.cuppers = cuppers;
        });
    }

    function removeSelected() {
      angular.forEach(vm.cuppers, function(cp) {
        if(cp.isChecked)
          cupsApi.remove(cp.matriculationNumber);
      });

      vm.getAll();
    }
  }
}());
