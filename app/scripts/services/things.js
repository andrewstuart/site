'use strict';

/**
 * @ngdoc service
 * @name astuartApp.Things
 * @description
 * # Things
 * Service in the astuartApp.
 */
angular.module('astuartApp')
  .service('Things', function ($http) {
    var things = this;

    $http.get('/data/things-i-do.json')
      .success(function(t) {
        things.list = t;
      });
  });
