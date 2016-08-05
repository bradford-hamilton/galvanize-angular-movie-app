(function() {
  angular
    .module("MovieApp")

    .factory('MovieSearch', ["$http", function($http) {
      var MovieSearch = {};
      MovieSearch.getMovies = function(movieName) {
        return $http.get( 'https://www.omdbapi.com/?s=' + movieName );
      };
      return MovieSearch;
    }]);
})();
