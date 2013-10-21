'use strict';

describe('Service: dataService', function () {

  var dataService;

  beforeEach(function() {
    module('volleyballviewerApp');

    inject(function(_dataService_) {
      dataService = _dataService_;
    });
  });

  it('should return something', function () {
    expect(!!dataService).toBe(true);
  });

});
