(function() {
  'use strict';

  angular
   .module('cups.admin')
   .controller('adminController', AdminController);

  AdminController.$inject = ['adminPreperation'];
  function AdminController(adminPreperation) {
    this.cuppers = adminPreperation;
  }
}());
