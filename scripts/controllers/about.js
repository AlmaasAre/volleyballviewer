'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('AboutCtrl', function ($scope, init) {
    
	$scope.about = 'active';

    console.log(init);

})
.service('AboutCtrlInit', function ($q) {

        var _prepare = function () {

            var deferred = $q.defer();

            deferred.resolve({About:"OM OSS"});
            return deferred.promise;
        }

        return {
            prepare:_prepare
        }
})
