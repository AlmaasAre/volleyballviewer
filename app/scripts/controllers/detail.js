'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('DetailCtrl', ['$scope', '$route', function ($scope, $route, pdf) {
    
	$scope.root = 'active';

    $scope.pdfUrl ='';
    var id = $route.current.params.id;
    console.log($scope.pdfUrl);


    //TODO: Create an init function to get pdf with id: url..


}]);
