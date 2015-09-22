
(function() {
  
  'use strict';
  
  angular
    
    // This module is the top-level module for the project. In it, we'll
    // include sub-modules that we create. Usually, each view get's it's own
    // module.
    .module('app', [
      // List all of the app's dependencies
      'example',
      'ionic'
    ])
    
    // In this example, the module config establishes what states (or pages)
    // exist within this module.
    .config(function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
      
        .state('example', {
          controller: 'ExampleCtrl as vm',
          templateUrl: 'app/example/example.tpl.html',
          url: '/example'
        })
        
      // If none of the above states are matched, use this as the fallback.
      $urlRouterProvider.otherwise('/example');
      
    })
    
    // This establishes a few settings for Ionic
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })
    
  ;
  
})();
