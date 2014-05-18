'use strict';

angular.module('followboardApp')
  .controller('FollowBoardCtrl', function ($scope, $http) {
    $http.get('/api/getFollowers').success(function(data) {
      console.log("Data: ", data);
      // $scope.awesomeThings = awesomeThings;
    });
    // $http.get('https://api.twitter.com/1.1/followers/ids.json?cursor=-1&screen_name=sitestreams&count=5000').success(function(awesomeThings) {
    // });
  });
