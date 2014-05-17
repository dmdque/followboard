'use strict';

angular.module('followboardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/followboard', {
        templateUrl: 'partials/followboard',
        // controller: 'MainCtrl'
        controller: 'FollowBoardCtrl'
      })
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });