'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('MainCtrl', function ($scope, init) {

	$scope.root = 'active';

    console.log(init);
	$scope.articles = init;

})
.service('MainCtrlInit', function (dataService, $q) {

    var _prepare = function () {

        var deferred = $q.defer();
        deferred.resolve(dataService.pdf.getAll());
        return deferred.promise;
    }

    return {
        prepare: _prepare
    }

});
