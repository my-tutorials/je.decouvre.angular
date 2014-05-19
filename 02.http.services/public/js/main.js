var booksApp = angular.module("booksApp", []);

booksApp.factory("Models", function() {
  var books = function() {
    return [
      {title:"Backbone c'est de la balle", description:"tutorial bb", level:"très bon"}
      , {title:"React ça dépote", description:"se perfectionner avec React", level:"bon"}
      , {title:"J'apprends Angular", description:"from scratch", level:"débutant"}
    ]
  };
  var levels = function() {
    return [
      "très bon", "bon", "débutant"
    ];
  }

  return {
    books : books, levels : levels
  }
});


var MainCtrl = booksApp.controller("MainCtrl", function($scope, Models) {

  $scope.books = Models.books();
  $scope.levels = Models.levels();

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
