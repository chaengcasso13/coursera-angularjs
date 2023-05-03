(function (params) {
    'use strict';


    angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope){
        $scope.name = "Franz";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        }
    });



})();