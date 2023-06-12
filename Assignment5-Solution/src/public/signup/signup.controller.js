(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['info'];
    function SignUpController(info) {
      var $ctrl = this;
      $ctrl.info = info;

      // $scope.firstName = "Franz";
      // $scope.lastName = "";
      // $scope.email = "";
      // $scope.phoneNumber = "";
      // $scope.desiredMenuNumber = "";
    }
    
})();