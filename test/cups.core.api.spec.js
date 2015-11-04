'use strict';

describe('When a cupper is loaded', function() {

  var cupsApi;
  var $httpBackend;

  beforeEach(module('cups.core'));
  beforeEach(inject(function($injector ,_$httpBackend_){

    cupsApi = $injector.get('cupsApi');
    $httpBackend = _$httpBackend_;

  }));

  it('should return a cupper instance', function(){

    var id = '1234567';
    var result;

    $httpBackend.expect('GET', '/api/cupper/' + id)
                .respond(200, { name: 'Gregor' });

    cupsApi.get(id)
           .then(function(cupper) {
             result = cupper;
           });

    $httpBackend.flush();
    expect(result.name).toBe('Gregor');

  });
});
