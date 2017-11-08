'use strict';
angular.module('app')
    .factory('BusinessService', function ($resource, Config) {
        return $resource(Config.getUrl() + '/business/business/:id', {}, {
            'query': {
                method: 'GET',
                isArray: true
            },
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': {
                method: 'PUT'
            }
        });
    });
