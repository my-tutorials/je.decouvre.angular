(function () {

  var MainCtrl = function ($scope, Models, Book) {

    $scope.whenFormIsLoaded = function() { console.log("Form is loaded ..."); }
    $scope.whenListIsLoaded = function() { console.log("List is loaded ..."); }

    $scope.books = null;
    $scope.levels = Models.levels();

    $scope.selectBook = function(book) {
      $scope.book = book;
    }

    $scope.getAllBooks = function() {
      Book.query().$promise.then(
        function(data) {
          $scope.books = data;
        },
        function(error) {
          console.log("getAllBooks", error);
        }
      )
    }

    $scope.saveBook = function(book) {
      book._id !== undefined ? $scope.updateBook(book) : $scope.createBook(book);
    }

    $scope.createBook = function(book) {
      Book.save(book).$promise.then(
        function(data) {
          $scope.getAllBooks();
          $scope.newBook();
        },
        function(error) {
          console.log("createBook", error);
        }
      )
    }

    $scope.newBook = function() {
      $scope.book = {};
    }

    $scope.updateBook = function(book) {
      Book.update({id: book._id}, book).$promise.then(
        function(data) {
          $scope.newBook();
          $scope.getAllBooks();
        },
        function(error) {
          console.log("updateBook", error);
        }
      )
    }

    $scope.deleteBook = function(id) {
      Book.delete({id: id}).$promise.then(
        function(data) {
          $scope.getAllBooks();
          $scope.newBook();
        },
        function(error) {
          console.log("book delete ERROR", error);
        }
      )
    }


    $scope.getBook = function(id) {
      Book.get({id:id}).$promise.then(
        function(data) {
          console.log(data);
          $scope.book = data;
        },
        function(error) {
          console.log("getBook", error);
        }
      )
    }

    $scope.getAllBooks()
  };

  MainCtrl.$inject = ["$scope", "Models", "Book"];

  angular.module("booksApp").controller("MainCtrl", MainCtrl);

}());


