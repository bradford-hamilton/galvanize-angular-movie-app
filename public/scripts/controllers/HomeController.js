(function() {
  angular
    .module("MovieApp")

    .controller('HomeController', ["$scope", "$http", "$stateParams", "MovieSearch", function($scope, $http, $stateParams, MovieSearch) {
      $scope.view = {};

      if ($stateParams.movieNameSearch){
        MovieSearch.getMovies($stateParams.movieNameSearch)
        .then(function(data) {
          $scope.view.searchData = data.data.Search;
        });
      }

      $scope.submitMovieForm = function(searchForm) {
        var movieName = searchForm.title;
        MovieSearch.getMovies(movieName)
        .then(function(data) {
          $scope.view.searchData = data.data.Search;
        });
      };

    }]);
})();
