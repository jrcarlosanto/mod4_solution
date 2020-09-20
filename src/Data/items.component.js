(function () {
    'use strict';
    
    angular.module('Data')
    .component('items', {
        templateUrl: 'src/Templates/items.template.html',
        bindings: {
            itemsList: '<'
        }
    });
    
    })();