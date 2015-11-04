'use strict';

describe('When passing 10 the filter', function() {

  var $filter;

  beforeEach(angular.mock.module('cups.core'));
  beforeEach(angular.mock.inject(function(_$filter_) {

    $filter = _$filter_;
  }));

  it('should create a Array with the lentgh of 10', function() {

    // Act
    var result = $filter('toCollection')(10);

    // Assert
    expect(result.length).toBe(10);
  });
});

describe('Testing the toCollection filter', function() {

  var $filter;

  beforeEach(angular.mock.module('cups.core'));
  beforeEach(angular.mock.inject(function(_$filter_) {

    $filter = _$filter_;
  }));

  describe('When passing 0 the filter', function(){

    it('should return 0', function() {

      // Act
      var result = $filter('toCollection')(0);

      // Assert
      expect(result).toBe(0);
    });

    it('should not throw', function() {

      expect(function() {
        $filter('toCollection')(0);
      }).not.toThrow();
    });
  });

  describe('When passing -1 the filter', function(){

    it('should return -1', function() {

      // Act
      var result = $filter('toCollection')(-1);

      // Assert
      expect(result).toBe(-1);
    });
  });

  describe('When passing "abcd" the filter', function(){

    it('should return "abcd"', function() {

      // Act
      var result = $filter('toCollection')('abcd');

      // Assert
      expect(result).toBe('abcd');
    });
  });

  describe('When passing "?%"§" the filter', function(){

    it('should return "?%"§"', function() {

      // Act
      var result = $filter('toCollection')('?%"§');

      // Assert
      expect(result).toBe('?%"§');
    });
  });
});
