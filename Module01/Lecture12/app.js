(function () { 'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {
        $scope.name = "Franzss";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;

        $scope.sayMessage = function () {
            var msg = "Me like eat snacks healthy!";
            var output = $filter('uppercase')(msg);
            
            return output;
        }

        $scope.feedMe = function () {
            $scope.stateOfBeing = "fed";
        }
    

    }

})();