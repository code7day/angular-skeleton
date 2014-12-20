'use strict';

angular.module('app', [
    'ngRoute'
]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/user/:userId', {
            templateUrl : 'pages/user-view.html',
            controller  : 'userViewController'
        })
        .otherwise({redirectTo: '/not-found'});
}]);