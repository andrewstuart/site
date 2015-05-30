'use strict';

/**
 * @ngdoc function
 * @name astuartApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the astuartApp
 */
angular.module('astuartApp')
  .controller('NavCtrl', function ($scope) {

    $scope.links = [{
      title: 'Home',
      url: '#/'
    },{
      title: 'About',
      url: '#/about'
    },{
      title: 'Contact',
      url: '#/contact'
    }];

    $scope.current = {
      link: $scope.links[0]
    };

  });
