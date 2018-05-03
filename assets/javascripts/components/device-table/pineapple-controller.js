var myApp = angular.module('pineappleController',[]);

myApp.controller('myPineapple', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';

  $scope.sortVar =  function(assign){
  alert('Added additional controller for future functionalities. You clicked on header: ' + assign)
  };
  
}]);