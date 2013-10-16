'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('DetailCtrl', function ($scope, $route) {
    
	$scope.root = 'active';

	$scope.id = $route.current.params.id;

});
