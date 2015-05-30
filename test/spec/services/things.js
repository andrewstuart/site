'use strict';

describe('Service: Things', function () {

  // load the service's module
  beforeEach(module('astuartApp'));

  // instantiate service
  var Things;
  beforeEach(inject(function (_Things_) {
    Things = _Things_;
  }));

  it('should do something', function () {
    expect(!!Things).toBe(true);
  });

});
