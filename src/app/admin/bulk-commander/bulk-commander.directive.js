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

  function controller() {
    var vm = this;

    vm.checkAll = checkAll;
    vm.removeSelected = removeSelected;

    function checkAll(isChecked) {
      angular.forEach(vm.cuppers, function(cp) {
        cp.isChecked = isChecked;
      });
    }

    function removeSelected() {
      angular.forEach(vm.cuppers, function(cp) {
        if(cp.isChecked)
          console.info('Call http to remove cupper....');
      });
    }
  }
}());
