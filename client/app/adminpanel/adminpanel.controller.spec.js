'use strict';

describe('Controller: AdminpanelCtrl', function () {

  // load the controller's module
  beforeEach(module('blogPlatformApp'));

  var AdminpanelCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminpanelCtrl = $controller('AdminpanelCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
