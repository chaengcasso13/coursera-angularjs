(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    AlreadyBoughtController.$inject = ['ShoppingListService'];

    function ToBuyController (ShoppingListService) {
        // TO show items:
        var showList = this;
        showList.items = ShoppingListService.getItems();

        // To add items on 'bought' list:
        var itemAdder = this;

        // itemAdder.itemName = "";
        // itemAdder.itemQuantity = "";

        itemAdder.addItem = function ( index ) {
            ShoppingListService.addBoughtItem( index );
        }

    }

    function AlreadyBoughtController (ShoppingListService) {
        var showBoughtList = this;

        showBoughtList.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService () {
        var service = this;

        // container of all the items:
        var toBuyItems = [
            {
                itemName : 'Cookies',
                itemQuantity : '10 bags'
            },
            {
                itemName : 'Chips',
                itemQuantity : '20 bags'
            },
            {
                itemName : 'Pepto Bismol',
                itemQuantity : '20 bottles'
            },
            {
                itemName : 'Chicken breast',
                itemQuantity : '10 kilos'
            },
            {
                itemName : 'Sugary Drinks',
                itemQuantity : '20 bottles'
            }
        ];

        // container of bought items:
        var boughtItems = [];

        service.getItems = function () {
            return toBuyItems;
        }

        service.addBoughtItem = function ( index ) {
            var item = toBuyItems[index];
            toBuyItems.splice(index, 1);

            boughtItems.push(item);
        }

        service.getBoughtItems = function () {
            return boughtItems;
        }
    }

})();