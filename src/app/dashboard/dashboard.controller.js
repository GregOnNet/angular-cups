(function() {
  'use strict';

  angular
   .module('cups.dashboard')
   .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$http'];

  function DashboardController($http) {
    var vm = this;
    vm.cuppers = [];

    $http.get('api/cuppers').success(function(response){
      vm.cuppers = response;
    });
  }
}());
