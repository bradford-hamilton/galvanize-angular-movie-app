app.controller('ShowController', ["$scope", "$http", "$stateParams", "MovieSearch", function($scope, $http, $stateParams, MovieSearch) {

  $http.get( 'http://www.omdbapi.com/?i=' + $stateParams.movieId ).then(function(specificMovieData) {
    $scope.movie = specificMovieData.data;
  });

}]);
