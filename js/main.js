var app = angular.module('myApp', ["ngRoute"]);
app.factory('GetData', function($http){
  return{
    movieData: function(type,passdata, response){
      var urlLink = "http://api.cinemalytics.in/v2/movie/" + type + "/" + passdata + "/?auth_token=6DB9B962A69E74C73133EC431A6B05D8";
      $http.get(urlLink).success(response);
    }
  }
});
app.controller('allMovie',function($scope, GetData, $routeParams, $route, $location){
$scope.year = $routeParams.year;

GetData.movieData('year',$routeParams.year,function(response){
$scope.movie = response;
});
$scope.gotoMovie = function(id){
  $location.path("/id/" + id);
};
//redirect to page
$scope.gotoMovieyear =function(year){
  $location.path("/year/" + year);
};
});
app.controller('singleMovie',function($scope, GetData, $routeParams){
GetData.movieData('id', $routeParams.ID,function(response){
  $scope.movie = response;
});
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/year/:year", {
        templateUrl : "templets/main.html",
        controller: "allMovie"
    })
    .when("/id/:ID", {
        templateUrl : "templets/single.html",
        controller: "singleMovie"
  })
  .otherwise({redirectTo: '/year/2017'});
});
