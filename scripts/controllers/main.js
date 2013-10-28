'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('MainCtrl', function ($scope, init) {

	$scope.root = 'active';
    $scope.orderProp = 'year';

	$scope.articles = init;

    $scope.setElementOrdering = function(orderString) {
        $scope.orderProp = orderString;
    }

    $scope.orderElements = function(item) {
        return item[$scope.orderProp];
    }

});

app.service('MainCtrlInit', function (dataService, $q) {

    var _prepare = function () {

        return dataService.pdf.getAll();

    }

    return {
        prepare: _prepare
    }

});
