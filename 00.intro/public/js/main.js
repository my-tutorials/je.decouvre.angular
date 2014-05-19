var booksApp = angular.module("booksApp", []);

var MainCtrl = booksApp.controller("MainCtrl", function($scope) {

  $scope.books = [
      {title:"Backbone c'est de la balle", description:"tutorial bb", level:"très bon"}
    , {title:"React ça dépote", description:"se perfectionner avec React", level:"bon"}
    , {title:"J'apprends Angular", description:"from scratch", level:"débutant"}
  ];

  $scope.levels = [
    "très bon", "bon", "débutant"
  ];

  $scope.selectedBook = null;

  $scope.selectBook = function(book) {
    $scope.selectedBook = book;
  }

  $scope.createBook = function() {
    $scope.books.push({
      title : "This is a new Book",
      description : "...",
      level: "???"
    });
  }

});
