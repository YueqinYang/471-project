
(function() {
  
  'use strict';
  
  angular
    .module('app')
    .config(AppConfig);
  ;
  
  // This establishes the states (or views) that exist in this module
  function AppConfig ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
      .state('home', {
        controller: 'HomeCtrl as vm',
        templateUrl: 'app/home/home.tpl.html',
        url: '/'
      })
      
    ;
      
    // If none of the above states are matched, use this as the fallback.
    $urlRouterProvider.otherwise('/');
    
  }
  
})();

