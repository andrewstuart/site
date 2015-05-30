'use strict';

/**
 * @ngdoc function
 * @name astuartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the astuartApp
 */
angular.module('astuartApp')
  .controller('MainCtrl', function ($scope, Things) {
    $scope.things = Things;
  });
