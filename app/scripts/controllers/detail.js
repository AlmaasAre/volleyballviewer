'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('DetailCtrl', ['$scope', '$route', function ($scope, $route, init) {

	$scope.root = 'active';

    setTimeout(function () {
        console.log(init);
    },2000);

}])
.service('DetailCtrlInit', function ($route, dataService, $q) {

    var _prepare = function () {
        console.log('getting pdf with id:' + $route.current.params.id);

        var deferred = $q.defer();
        deferred.resolve(dataService.pdf.getById($route.current.params.id));
        return deferred.promise;
    }

    return {
        prepare: _prepare
    }

});
