'use strict';

describe('When using cupperController', function() {

  var controller;
  var scope;
  var cupsApi;
  var $httpBackend;

  beforeEach(module('cups.cupper'));
  beforeEach(inject(function($controller, _$httpBackend_, $rootScope, $injector) {

    scope = $rootScope.$new();
    cupsApi = $injector.get('cupsApi');

    controller = $controller('cupperController', { $scope: scope, cupsApi: cupsApi });
    spyOn(scope, '$emit');

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

    it('should raise an event telling that creation was successful', function() {
      $httpBackend.expect('POST','/api/cupper/')
                  .respond(201, { name: 'Gregor' });

      controller.create();
      $httpBackend.flush();

      expect(scope.$emit)
        .toHaveBeenCalled();
    });
  });
});
