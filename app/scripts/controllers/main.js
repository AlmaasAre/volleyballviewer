'use strict';

var app = angular.module('volleyballviewerApp');

app.controller('MainCtrl', function ($scope) {
    
	$scope.root = 'active';


	$scope.articles = [
		{
			id: 1,
			image_url: "http://www.url.com/1.jpg",
			year: "1988",
			text: "Asbjørn"
		},
		{
			id: 2,
			image_url: "http://www.url.com/2.jpg",
			year: "1989",
			text: "Pelle"
		},
		{
			id: 3,
			image_url: "http://www.url.com/3.jpg",
			year: "1990",
			text: "Roar"
		},
		{
			id: 4,
			image_url: "http://www.url.com/4.jpg",
			year: "1991",
			text: "Nils"
		},
		{
			id: 5,
			image_url: "http://www.url.com/5.jpg",
			year: "1992",
			text: "Kåre"
		},
		{
			id: 6,
			image_url: "http://www.url.com/6.jpg",
			year: "1993",
			text: "Peder"
		},
		{
			id: 7,
			image_url: "http://www.url.com/7.jpg",
			year: "1994",
			text: "Ronny Karsten"
		}
	];

});
