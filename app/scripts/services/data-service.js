'use strict';

angular.module('volleyballviewerApp')
  .service('dataService', function dataService($q, Restangular) {

        var _getByIdWrapper = function(url){

            var _getById = function (id) {
                var deferred = $q.defer();

                var entity = Restangular.one(url, id).get();
                deferred.resolve(entity);

                return deferred.promise;
            };

            return _getById;
        }


        var _getAllWrapper = function (url) {

            var _getAll = function () {
                var deferred = $q.defer();

                var entities = Restangular.all(url).getList();

                deferred.resolve(entities);
                return deferred.promise;
            };

            return _getAll;
        };


        return {
            pdf:{
                getById:_getByIdWrapper('pdfs'),
                getAll:_getAllWrapper('pdfs')
            }
        };

  });
