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
      .when('/pixapp', {
        templateUrl: 'partials/pixapp',
        // controller: 'MainCtrl'
        controller: 'PixappCtrl'
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