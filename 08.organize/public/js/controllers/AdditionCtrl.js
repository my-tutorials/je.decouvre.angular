(function () {

  var AdditionCtrl = function ($scope, $routeParams) {
    $scope.result = parseInt($routeParams['a']) + parseInt($routeParams['b']);
  };

  AdditionCtrl.$inject = ["$scope", "$routeParams"];

  angular.module("booksApp").controller("AdditionCtrl", AdditionCtrl);

}());
