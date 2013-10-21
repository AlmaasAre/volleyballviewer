'use strict';

var app = angular.module('volleyballviewerApp', ['ngRoute', 'ngAnimate']);


app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/artikkel/:url', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/tidslinje', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl'
      })
      .when('/om', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


app.constant('Config', {
   APIUrl:'sjekk mannen'

});