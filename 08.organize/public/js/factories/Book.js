(function () {

  var Book = function ($resource) {
    return $resource("/books/:id", {id: '@id'},{
      update: { method: 'PUT' , params: {id: '@id'}, isArray: false }
    });
  };

  Book.$inject = ["$resource"];

  angular.module("booksApp").factory("Book", Book);

}());

