(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .controller('welcomeCupper', welcomeCupper);

  welcomeCupper.$inject = ['$scope','cupper'];

  function welcomeCupper($scope, cupper){

    var welcome = this;

    welcome.cupper = { };
    welcome.newCupper = newCupper;

    function newCupper(){

      return
        cupper
          .create(welcome.cupper)
          .then(function() {
            
            welcome.cupper = {};
            $scope.form.$setPristine();
        });
    };
  }
}());
