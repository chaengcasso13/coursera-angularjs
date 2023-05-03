(function () { 'use strict';
     angular.module('DIApp', [])
     .controller('DIController', DIController);

     function DIController($scope, $filter) {
        $scope.name = 'Franz';

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
     }


     function AnnotateMe(name, job, blah){
        return "Blah!";
     }

     console.log(AnnotateMe());

})();