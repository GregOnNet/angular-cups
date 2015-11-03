(function() {
  'use strict';

  angular
    .module('cups.admin')
    .directive('cupperEdit', cupperEdit);

  function cupperEdit() {
    return {
      scope: {
        cupper: '='
      },
      templateUrl: '/admin-board/cupper-edit/cupper-edit.directive.tpl.html',
      controller: controller,
      controllerAs: 'edit',
      bindToController: true
    };
  }

  controller.$inject = ['cupper'];
  function controller(cupper) {
    var vm = this;

    vm.remove = remove;

    function remove(matriculationNumber) {
      cupper.remove(matriculationNumber);
    }
  }
}());
