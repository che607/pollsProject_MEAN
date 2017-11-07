angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'mainController',
    })
    .when('/main', {
      templateUrl: 'partials/_main.html',
    })
    .when('/newPoll', {
      templateUrl: 'partials/_newPoll.html',
    })
    .when('/viewPoll/:id', {
      templateUrl: 'partials/_viewPoll.html',
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);
