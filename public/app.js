(function() {
  angular
    .module("MovieApp", ['ui.router'])

    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: '/?movieNameSearch',
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
})();
