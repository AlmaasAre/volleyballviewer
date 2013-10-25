'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('MainCtrl', function ($scope, init) {

	$scope.root = 'active';

	$scope.articles = init;

})
.service('MainCtrlInit', function (dataService, $q) {

    var _prepare = function () {

        return dataService.pdf.getAll();

    }

    return {
        prepare: _prepare
    }

});
