(function (){
    'use strict';

    var shoppingList1 = [
        "Milk", "Donut", "Cookie", "Milky Way", "Dunkin' Donuts"
    ];

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', 
    ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
    }

})();