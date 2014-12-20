'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource'
]);

app.factory("User", function($resource) {
    return $resource("//phalcon-module.dmtry.me/api/users/get/:id", {id:'@id'});
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
}]);

app.controller('userViewController', function($scope, $routeParams, User) {
    User.get({id: $routeParams.id}, function(data) {
        $scope.user = data.result;
    });
});