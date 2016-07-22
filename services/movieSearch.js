app.factory('MovieSearch', ["$http", function($http) {

  var MovieSearch = {};
  MovieSearch.getMovies = function(movieName) {
    return $http.get( 'http://www.omdbapi.com/?s=' + movieName );
  };
  return MovieSearch;
  
}]);
