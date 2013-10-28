'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('DetailCtrl', function ($scope, init) {

	$scope.root = 'active';
    $scope.pdf = init;

})
.service('DetailCtrlInit', function ($route, dataService, $q) {

    var _prepare = function () {
        var id = $route.current.params.id;
        console.log('getting pdf with id: ' + id);

        return dataService.pdf.getById(id);
    }

    return {
        prepare: _prepare
    }

});
