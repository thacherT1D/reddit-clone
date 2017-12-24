angular
  .module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './components/home/home.html',
        controller: './components/home/homeController'
      })
      .otherwise({
        redirectTo: '/'
      });
});
