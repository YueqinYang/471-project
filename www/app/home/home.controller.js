
(function() {
  
  'use strict';
  
  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl)
  ;
  
  function HomeCtrl() {
    
    var vm = this;
    
    vm.categoryList = [
      'category1',
      'category2',
      'category3',
      'category4',
      'category5',
      'category6',
      'category7',
      'category8',
      'category9',
    ];
    
  }
  
})();

