'use strict';
angular.module('app')
    .factory('ProductService', function ($resource, Config) {
        return $resource(Config.getUrl() + '/product/products/:id', {}, {
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
