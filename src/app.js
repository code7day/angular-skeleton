'use strict';

angular.module('myApp', [
    'ngRoute'
]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/phones/:userId', {
            templateUrl : 'pages/user-view.html',
            controller  : 'userViewController'
        })
        .otherwise({redirectTo: '/not-found'});
}]);