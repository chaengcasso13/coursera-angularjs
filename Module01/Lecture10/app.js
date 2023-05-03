// (function () { 'use strict';
//      angular.module('DIApp', [])
//      .controller('DIController', DIController);

//      DIController.$inject = ['$scope','$filter'];

//      function DIController($scope, $filter) {
//         $scope.name = 'Franz';

//         $scope.upper = function () {
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         };
//      }

// })();


// Minified JS
!function(){"use strict";function n(n,e){n.name="Franz",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();

