(function () {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      }).state('home', {
        url: '/home',
        templateUrl: 'app/main/dashboard.html',
        controller: 'MainController'
      }).state('business', {
        url: '/business',
        templateUrl: 'app/business/business.html',
        controller: 'BusinessController'
      }).state('product', {
        url: '/product',
        templateUrl: 'app/product/product.html',
        controller: 'ProductController'
      }).state('sale', {
        url: '/sale',
        templateUrl: 'app/sale/sale.html',
        controller: 'SaleController'
      })
    $urlRouterProvider.otherwise('/');
  }
})();
