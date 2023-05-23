(function () {
    'use strict';

    var shoppingList1 = [
        "Milk", "Donut", "Cookie"
    ];

    var shoppingList2 = [
        {
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donut",
            quantity: "200"
        },
        {
            name: "Cookie",
            quantity: "300"
        }
    ];

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addNewItem = function () {
            var newItem = {
                name: $scope.newItem,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        };
    }

})();