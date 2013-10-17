'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('DetailCtrl', ['$scope', '$route', 'PDFViewerService', function ($scope, $route, pdf) {
    
	$scope.root = 'active';
	$scope.id = $route.current.params.id;

    // $scope.pdfURL = "assets/pdfviewer/test.pdf";
    // $scope.pdfURL = "https://s3-eu-west-1.amazonaws.com/volleyballpdf/pdf/Magnes+volleyballkr_nike++1978-1979+-+bind+1_OCR.pdf";
    // $scope.instance = pdf.Instance("viewer");


    // $scope.nextPage = function() {
    //     $scope.instance.nextPage();
    // };

    // $scope.prevPage = function() {
    //     $scope.instance.prevPage();
    // };

    // $scope.gotoPage = function(page) {
    //     $scope.instance.gotoPage(page);
    // };

    // $scope.pageLoaded = function(curPage, totalPages) {
    //     $scope.currentPage = curPage;
    //     $scope.totalPages = totalPages;
    // };

    // $scope.loadProgress = function(loaded, total, state) {
    //     console.log('loaded =', loaded, 'total =', total, 'state =', state);
    // };

}]);
