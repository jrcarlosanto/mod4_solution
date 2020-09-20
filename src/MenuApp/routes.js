(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(Routes);
    
    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Routes($stateProvider, $urlRouterProvider) {
    
      $urlRouterProvider.otherwise('/home');
     
      $stateProvider

      // Home page
    .state('home', {
        url: '/home',
      templateUrl: 'src/Templates/home.templates.html'
      })

        // Premade categories list
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/Templates/categories.templates.html',
        controller: 'CategoriesController as categoriesListController',
        resolve: {
            categoriesList: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
             }]
        }
  })

   // items list
    .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/Templates/items.templates.html',
        controller: 'ItemsController as itemsListController',
        resolve: {
            itemsList: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
  });
    
}
    
})();