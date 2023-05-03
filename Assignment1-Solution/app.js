(function () { 'use strict';

    angular.module('LunchCheckerApp', [])
    .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController ($scope) {
        $scope.foods = "";
        $scope.msg = "";
        $scope.checkIfTooMuch = function () {
            var msg = message($scope.foods);
            $scope.msg = msg;
        }

        function message(string) {
            var foods = string.split(",");

            if (foods == "") return "Please enter data first!";
            if (foods.length <= 3) return "Enjoy!";
            if (foods.length > 3) return "Too much!";
        }
    }
})();