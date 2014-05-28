(function () {
  var booksApp = angular.module("booksApp", ["ngResource", "ngRoute"]); /* <-- ajout d'une dépendance : module ngResource */

  booksApp.config(['$routeProvider',
    function($routeProvider) {

      $routeProvider.
        when('/actualites', {
          templateUrl: "templates/actualites.html",
          controller: "ActualitesCtrl"
        })
        .when('/coupsdecoeur', {
          templateUrl: "templates/coupsdecoeur.html",
          controller: "CoupsDeCoeurCtrl"
        })
        .when('/addition/:a/:b', {
          templateUrl: "templates/addition.html",
          controller: "AdditionCtrl"
        })
        .otherwise({
          redirectTo: "/"
        })

    }
  ]);

  booksApp.filter("stars", function() {
    return function(data) {
      switch (data) {
        case "très bon":
          return "***";
          break;
        case "bon":
          return "**";
          break;
        case "débutant":
          return "*";
          break;
        default:
          return "";
      }
    }
  });

})();