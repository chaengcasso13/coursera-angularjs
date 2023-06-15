(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController)
    .service('MyInformationService', MyInformationService);
    
    SignUpController.$inject = ['$scope', 'MyInformationService', 'MenuService'];

    function SignUpController($scope, MyInformationService, MenuService) {

      $scope.firstName = "";
      $scope.lastName = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.menuNumber = "";
      $scope.isValid = false;
      
      var signup = this;
      signup.getInformation = MyInformationService.displayInfo();

      var myInfoObj = {}
      $scope.infoObj = {};
      $scope.favoriteDish = {};
      
      var dish = this;
      
      $scope.checkInfo = function () {

        // if
        if ($scope.signup.$valid) {
          $scope.isValid = true;
          // try
          var splitInput = $scope.menuNumber.split(/(\d+)/).filter(function (value) {
            return value !== "";
          })

          var shortName = splitInput[0];
          var index = splitInput[1] - 1;
          // end of try

          $scope.shortName = shortName;
          $scope.index = index;

          console.log("short name: " + $scope.shortName);
          dish.getFavoriteDish = MenuService.getFavoriteItem($scope.menuNumber, $scope.shortName, $scope.index);
          console.log(dish.getFavoriteDish.$$state.value === null);

          if (dish.getFavoriteDish.$$state.value === null) {
            // $scope.signup.$valid = false;
            $scope.errorMessage = "Invalid menu number";

          } else {
            myInfoObj = {
              firstName: $scope.firstName,
              lastName: $scope.lastName,
              email: $scope.email,
              phone: $scope.phone,
              menuNumber: $scope.menuNumber,
              dish: dish.getFavoriteDish,
              shortName: $scope.shortName,
              index: $scope.index
            }
  
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.email = "";
            $scope.phone = "";
            $scope.menuNumber = "";
  
            $scope.signup.$setPristine();
            $scope.signup.$setUntouched();
            $scope.infoObj = myInfoObj;
  
            MyInformationService.getInfoObj($scope.infoObj);
          }
        }
      }
    }

    function MyInformationService () {
      var service = this;
      var informationObject = {};

      service.getInfoObj = function (myInfoObj) {
        informationObject = myInfoObj;
      }

      service.displayInfo = function () {
        if (!Object.keys(informationObject).length) return "No information yet.";
        return informationObject;
      }
    }

})();