var app = angular.module("MovieApp", ['ui.router']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .state('show', {
      url: '/show/:movieId',
      controller: 'ShowController',
      templateUrl: 'views/show.html'
    });
    $locationProvider.html5Mode(true);
}]);

app.controller('HomeController', ["$scope", "$http", function($scope, $http) {

  $scope.view = {};

  $scope.submitMovieForm = function(searchForm) {
    var movieName = searchForm.title;
    $http.get( 'http://www.omdbapi.com/?s=' + movieName ).then(function(data) {
      $scope.view.searchData = data.data.Search;
    });
  };

}]);


app.controller('ShowController', ["$scope", "$http", "$stateParams", function($scope, $http, $stateParams) {

  $http.get( 'http://www.omdbapi.com/?i=' + $stateParams.movieId ).then(function(specificMovieData) {
    $scope.movie = specificMovieData.data;
    console.log($scope.movie);
  });

}]);
