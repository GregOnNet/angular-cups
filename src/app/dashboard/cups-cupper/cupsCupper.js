(function() {
  'use strict';

  angular
    .module('cups.core')
    .directive('cupsCupper', cupper);

  function cupper(){
    return {
      restrict    : 'E',
      templateUrl : 'dashboard/cups-cupper/cups-cupper.html',
      scope       : {

        cupper : '=identity'
      }
    };
  }
}());
