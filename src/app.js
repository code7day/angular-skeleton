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
        .when('/user/:userId', {
            templateUrl : 'pages/user-view.html',
            controller  : 'userViewController'
        })
        .otherwise({redirectTo: '/not-found'});
}]);

app.controller('userViewController', function($scope, User) {
    User.get({id: 1}, function(data) {
        $scope.user = data.result;
    });
});