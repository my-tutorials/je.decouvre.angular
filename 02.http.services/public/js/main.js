var booksApp = angular.module("booksApp", []);

booksApp.factory("Models", function() {
  var levels = function() {
    return [
      "très bon", "bon", "débutant"
    ];
  }

  return {
    levels : levels
  }
});


booksApp.service("BooksServices", function($http) {

  this.getAll = function(callback) {
    $http.get("books").success(function(data) {
      callback(data);
    })
  }

  this.create = function(book, callback) {
    $http.post("books", book).success(function(data){
      callback(data);
    });
  }

})

var MainCtrl = booksApp.controller("MainCtrl", function($scope, Models, BooksServices) {

  $scope.books = null;
  $scope.levels = Models.levels();

  $scope.getAllBooks = function() {
    BooksServices.getAll(function(data) {
      $scope.books = data;
    })
  }

  $scope.createBook = function(book) {
    BooksServices.create(book, function(data) {
      $scope.getAllBooks();
    })
  }


  /*
  $scope.getAllBooks = function() {
    $http.get("books").success(function(data) {
      $scope.books = data;
    })
  }

  $scope.createBook = function(book) {
    console.log("book", book)
    $http.post("books", book).success(function(data){
      console.log(data);
      $scope.getAllBooks();
      $scope.book = null;
    });
  }
  */

  $scope.getAllBooks()

});
