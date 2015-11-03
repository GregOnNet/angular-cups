(function() {
  'use strict';

  angular
    .module('cups.admin')
    .directive('bulkCommander', cupperEdit);

  function cupperEdit() {
    return {
      scope: {
        cuppers: '='
      },
      templateUrl: '/admin-board/bulk-commander/bulk-commander.directive.tpl.html',
      controller: controller,
      controllerAs: 'commander',
      bindToController: true
    };
  }

  function controller() {
    var vm = this;

    vm.cuppers;
    vm.checkAll = checkAll;

    function checkAll(checked) {
       angular.forEach(vm.cuppers, function(cupper) {
         cupper.checked = checked;
       });
    }
  }
}());
