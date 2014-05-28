(function () {

  var Models = function () {
    var levels = function() {
      return [
        "", "très bon", "bon", "débutant"
      ];
    }

    return {
      levels : levels
    }
  };

  //Models.$inject = [];

  angular.module("booksApp").factory("Models", Models);

}());

(function () {}());