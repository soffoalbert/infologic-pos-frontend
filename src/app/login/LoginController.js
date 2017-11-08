'use strict';
  angular
    .module('app')
    .controller('LoginController', MainController);

  function MainController($scope, $state) {
    $scope.goHome = function () {
      $state.go("home")
    }
  }
