(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('MyInformationService', MyInformationService);
    
    // SignUpController.$inject = ['info'];
    SignUpController.$inject = ['$scope', 'MyInformationService'];
    function SignUpController($scope, MyInformationService) {
      // var $ctrl = this;

      // scope info:
      $scope.firstName = "fdb";
      $scope.lastName = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.menuNumber = "";

      var signup = this;
      signup.getInformation = MyInformationService.displayInfo();
      

      var myInfoObj = {}
      $scope.infoObj = {};

      $scope.checkInfo = function () {
        myInfoObj = {
          firstName: $scope.firstName,
          lastName: $scope.lastName,
          email: $scope.email,
          phone: $scope.phone,
          menuNumber: $scope.menuNumber
        }
        $scope.infoObj = myInfoObj;
        console.log($scope.firstName);
        console.log("myInfoObj: " + myInfoObj);
        console.log("$scope.infoObj: " + $scope.infoObj);

        MyInformationService.getInfoObj($scope.infoObj);
      }
    }
    

    function MyInformationService () {
      var service = this;

      var informationObject = {};

      service.getInfoObj = function (myInfoObj) {
        // if (!Object.keys(myInfoObj).length) return "No information yet.";

        informationObject = myInfoObj;
        console.log("getInfoObj: " + myInfoObj);
      }
      service.displayInfo = function () {
        if (!Object.keys(informationObject).length) return "No information yet.";
        
        console.log(informationObject);
        return informationObject;
      }
    }

})();