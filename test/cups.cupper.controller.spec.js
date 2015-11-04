'use strict';

describe('When using cupperController', function() {

  var controller;
  var $httpBackend;

  beforeEach(module('cups.cupper'));
  beforeEach(inject(function($controller, _$httpBackend_) {
    controller = $controller('cupperController');
    $httpBackend = _$httpBackend_;
  }))

  describe('When the cupper was created successfully', function() {

    it('should contain an instance of the created cupper', function() {
      $httpBackend.expect('POST','/api/cupper/')
                  .respond(201, { name: 'Gregor' });

      controller.create();
      $httpBackend.flush();

      expect(controller.identity.name).toBe('Gregor');
    });
  });
});
