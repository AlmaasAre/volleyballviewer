'use strict';

var app = angular.module('volleyballviewerApp', ['ngRoute', 'ngAnimate', 'restangular']);


app.config(function ($routeProvider) {

    //This helper injects a function with the service
    //defined in the initMethod string and returns services.prepare()
    var interceptWith = function(service, parameters) {
        return [service, function(injectedServiceInstance) {
            var promise = injectedServiceInstance.prepare(parameters);
            promise.then(function() {
            });
            return promise;
        }];
    }


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
            init: interceptWith('MainCtrlInit')
        }
      })
      .when('/artikkel/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        resolve: {
            init: interceptWith('DetailCtrlInit')
        }
      })
      .when('/tidslinje', {
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl'
      })
      .when('/om', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
            init: interceptWith('AboutCtrlInit')
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//Config constants
app.constant('Config', {
    APIUrl:'http://volleyball.azurewebsites.net/collections/'

});

//Configuration of modules
app.run(function (Restangular, Config) {
    Restangular.setBaseUrl(Config.APIUrl);
});
