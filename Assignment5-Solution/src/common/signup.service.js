(function () {
    "use strict";

    angular.module('common')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$scope'];
    function SignUpService($scope) {
        var service = this;

        $scope.firstName = "Franzs";
        service.getInfo = function () {
            return $scope.firstName;
        };
    }
})();