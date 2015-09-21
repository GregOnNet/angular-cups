'use strict';

describe('When all cuppers are requested', function() {

  beforeEach(function() {
    angular.module('ngRoute', []);
    module('cups.core');
  });

  var cupper;
  var $httpBackend;

  beforeEach(inject(function($injector){
    cupper = $injector.get('cupper');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should return all registered cuppers', function() {

   $httpBackend.expect('GET', '/api/cuppers')
     .respond(200, [{ 'name': 'Gregor' }]);

     cupper.getAll().then(function(result){
       expect(result[0].name).toBe('Gregor');
     });

     $httpBackend.flush();
  });
});
