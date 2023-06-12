(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    MenuItemsController.$inject = ['signUp'];
    function MenuItemsController(signUp) {
      var $ctrl = this;
      $ctrl.signUp = signUp;
    }
    
    })();