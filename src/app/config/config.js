angular.module('app')
        .factory("Config", function(){
            function getUrl() {
                return "http://127.0.0.1:8084";
            }
            return {
                getUrl: getUrl
            };
        })
