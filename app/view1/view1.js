'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.myName;

  $scope.handleFocus = function(){
    console.log( "Focused!", $scope.myName );
  };

  $scope.handleClick = function(){
    console.log( "Clicked!", $scope.myName );
  };

}]);