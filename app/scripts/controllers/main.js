'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('MainCtrl', function ($scope, init) {

	$scope.root = 'active';
    $scope.orderProp = 'year';

    console.log(init);
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

        var deferred = $q.defer();
        deferred.resolve(dataService.pdf.getAll());
        return deferred.promise;
    }

    return {
        prepare: _prepare
    }

});
