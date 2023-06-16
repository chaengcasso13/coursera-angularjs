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

      var checkValid = function (infoObject) {
        console.log("NAME: " + infoObject.dish.value.name);
      }
      
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

          // dish.getFavoriteDish.then(function (response) {
          //   dish.favDish = response.data;
          // })

          // $scope.container = dish.getFavoriteDish;
          console.log(dish.favDish);

          

          // var container;

          // MenuService.getFavoriteItem($scope.menuNumber, $scope.shortName, $scope.index).then(function(response) {
          //   container = response.data;
          //   console.log(dish.getFavoriteDish);
          // })

          if (dish.getFavoriteDish === null) {
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

            console.log(myInfoObj.dish);
  
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

          // console.log("NAMEs: " + signup.getInformation);
        }
      }
    }

    function MyInformationService () {
      var service = this;
      var informationObject = {};

      service.getInfoObj = function (myInfoObj) {
        informationObject = myInfoObj;
        // console.log(informationObject.dish.$$state.value);
      }

      service.displayInfo = function () {
        if (!Object.keys(informationObject).length) return "No information yet.";
        return informationObject;
      }
    }

})();