
(function() {
  
  'use strict';
  
  angular
    
    // This is a separate module for our example page. We'll include it in our
    // top-level module
    .module('example')
    
    // Controllers are the components that tie directly into HTML documents.
    // Controllers will store the variables, objects, functions, etc. that you
    // need to reference in your HTML. They should be as light as possible.
    // "Business-logicy" stuff should go into a SERVICE, not here.
    .controller('ExampleCtrl', ExampleCtrl)
    
  ;
  
  // Controllers don't return anything like services do. They are instantiated
  // in HTML, and you refer back to the values they store. Including
  // 'ExampleService' in the function parameters gives us access to everything
  // that this service returns.
  function ExampleCtrl(ExampleService) {
    
    var vm = this;
    
    vm.getBestMovie = getBestMovie;
    
    vm.movies = [
      { title: 'The Empire Strikes Back', director: 'Irvin Kershner', rating: 8.8, year: 1980 },
      { title: 'The Return of the Jedi', director: 'Richard Marquand', rating: 8.4, year: 1983 },
      { title: 'A New Hope', director: 'George Lucas', rating: 8.7, year: 1977 }
    ];
    
    function getBestMovie() {
      return ExampleService.getBestMovie(vm.movies);
    }
    
  }
  
})();
