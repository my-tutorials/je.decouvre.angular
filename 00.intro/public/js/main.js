var booksApp = angular.module("booksApp", []);

var MainCtrl = booksApp.controller("MainCtrl", function($scope) {

  $scope.books = [
      {title:"Backbone c'est de la balle", description:"tutorial bb", niveau:"très bon"}
    , {title:"React ça dépote", description:"se perfectionner avec React", niveau:"bon"}
    , {title:"J'apprends Angular", description:"from scratch", niveau:"débutant"}
  ];

  $scope.niveaux = [
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
      niveau: "???"
    });
  }

});
