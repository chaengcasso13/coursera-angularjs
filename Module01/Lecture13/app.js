(function () { 'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];

    function MsgController($scope, $filter, lovesFilter) {
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

        $scope.sayLovesMessage = function () {
            var msg = "Me like eat snacks healthy!";
            msg = lovesFilter(msg);
            return msg;
        }
    

    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("like", "love");
            return input;
        };
    }

    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();