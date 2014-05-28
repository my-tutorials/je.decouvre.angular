(function () {
  var CoupsDeCoeurCtrl = function ($scope) {
    $scope.title = "Coups de Coeur";
    $scope.items = [
      { title:"Game of Thrones" }
      , { title:"Bilbo le Hobbit" }
      , { title:"Le sorcier de TerreMère" }
    ];
  };

  CoupsDeCoeurCtrl.$inject = ["$scope"];

  angular.module("booksApp").controller("CoupsDeCoeurCtrl", CoupsDeCoeurCtrl);
}());
