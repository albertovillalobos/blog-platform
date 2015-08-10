'use strict';

angular.module('blogPlatformApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('adminpanel', {
        url: '/adminpanel',
        templateUrl: 'app/adminpanel/adminpanel.html',
        controller: 'AdminpanelCtrl'
      });
  });