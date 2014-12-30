'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource'
]);

app.factory("UserService", function($resource, $http) {
    return {
        all: function($callback) {
            return $http.get("//phalcon-module.dmtry.me/api/users").success($callback);
        },
        get: function($id, $callback) {
            return $resource("//phalcon-module.dmtry.me/api/users/get/:id", {id:'@id'}).get({id: $id}, $callback);
        }
    };
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/user/:id', {
            templateUrl : 'pages/user-view.html',
            controller  : 'userViewController'
        })
        .when('/users', {
            templateUrl : 'pages/users.html',
            controller  : 'usersController'
        })
        .otherwise({redirectTo: '/not-found'});

    $locationProvider.html5Mode(true);
}]);

app.controller('userViewController', function($scope, $routeParams, $resource, UserService) {
    UserService.get($routeParams.id, function(data) {
        $scope.user = data.result;
    });
});

app.controller('usersController', function($scope, $routeParams, UserService) {
    UserService.all(function(data) {
        $scope.users = data.result.users;
    });
});