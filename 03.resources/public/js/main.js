var booksApp = angular.module("booksApp", ["ngResource"]); /* <-- ajout d'une dépendance : module ngResource */

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

booksApp.service("BooksServices", function($resource) {

  var books = $resource("/books/:id", {id: '@id'},{
    update: { method: 'PUT' }
  });


  this.getAll = function(callback) {
    /*
    books.query().success(function(data) {
      callback(data);
    });
    */
    books.query().$promise.then(function(data) {
      callback(data);
    }, function(error) {});
  }

  this.create = function(book, callback) {
    /*
    books.save(book).success(function(data){
      callback(data);
    })
    */
    books.save(book).$promise.then(function(data){
      callback(data);
    }, function(error) {});
  }

  this.update = function(book, callback) {
    books.update({id:book._id}, book).$promise.then(function(data){
      callback(data);
    }, function(error) {});
  }

  this.getOneById = function(id, callback) {
    books.get({id:id}).$promise.then(function(data){
      callback(data);
    }, function(error) {});
  }

  this.deleteOneById = function(id, callback) {
    books.delete({id:id}).$promise.then(function(data){
      callback(data);
    }, function(error) {});
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

  $scope.updateBook = function(book) {
    BooksServices.update(book, function(data) {
      $scope.getAllBooks();
    })
  }

  $scope.getBook = function(id) {
    BooksServices.getOneById(id, function(data) {
      //TODO
      console.log("get one book", data)
    })
  }

  $scope.deleteBook = function(id) {
    BooksServices.deleteOneById(id, function(data) {
      //TODO
      console.log("delete one book", data)
    })
  }

  $scope.getAllBooks()

  /*pour test :*/
  window.getBook = $scope.getBook;
  window.updateBook = $scope.updateBook
  window.deleteBook = $scope.deleteBook
  //{ title: 'ola', description: 'qétal', _id: '0HC0iIQLD3HJ1YOL' }

});
