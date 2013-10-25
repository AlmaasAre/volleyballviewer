'use strict';

angular.module('volleyballviewerApp')
  .service('dataService', function dataService($q, Restangular) {

        var _getByIdWrapper = function(url){

            var _getById = function (id) {

                //Returns a promise of the requested entity
                return Restangular.one(url, id).get();

            };

            return _getById;
        }


        var _getAllWrapper = function (url) {

            var _getAll = function () {

                //Returns a promise of the requested entities
                return Restangular.all(url).getList();
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
