(function () {
    'use strict';
    
    angular.module('Data')
    .component('categories', {
        templateUrl: 'src/Templates/categories.template.html',
        bindings: {
            categoriesList: '<'
        }
        
    });
    
    })();