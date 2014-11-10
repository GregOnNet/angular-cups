(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboard', dashboard);

  dashboard.$inject = ['cupper'];

  function dashboard(cupper){
    var dashboard = this;

    dashboard.cuppers = [];
    dashboard.getAll = getAll;

    getAll();

    function getAll(){
      return cupper.getAll().then(function(cuppers){
        dashboard.cuppers = cuppers;
        return dashboard.cuppers;
      });
    }
  }
}());
