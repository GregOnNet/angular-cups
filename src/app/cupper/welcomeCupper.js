(function() {
  'use strict';

  angular
    .module('cups.cupper')
    .controller('welcomeCupper', welcomeCupper);

  welcomeCupper.$inject = ['cupper'];

  function welcomeCupper(cupper){
    var welcome = this;

    welcome.cupper = { };
    welcome.newCupper = newCupper;

    function newCupper(){
      cupper.create(welcome.cupper);
    };
  }
}());
