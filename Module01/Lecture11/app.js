(function () { 'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Franzss";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function () {
            return "I want to eat"
        }

        $scope.feedMe = function () {
            $scope.stateOfBeing = "fed";
        }
    

    }

})();