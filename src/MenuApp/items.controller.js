(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['itemsList'];
    function ItemsController(itemsList) {
      
      this.itemsList = itemsList;
    }
    
    })();
    