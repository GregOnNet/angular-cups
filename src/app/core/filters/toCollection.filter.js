(function() {
  'use strict';

  angular
    .module('cups.core')
    .filter('toCollection', toCollection);

  function toCollection() {

    return function (input) {
      if (input && !isNaN(input) && input > 0)
        return new Array(input);

      return input;
    };
  }
}());
