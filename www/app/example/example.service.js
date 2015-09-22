
(function() {
  
  'use strict';
  
  angular
  
    // This is a separate module for our example page. We'll include it in our
    // top-level module
    .module('example')
    
    // This file represents a service (or factory). Services are supposed to
    // contain functions that retrieve data from web services or perform
    // "business-logicy" work.
    .factory('ExampleService', ExampleService)
    
  ;
  
  // Services return a single object, but that object can (and usually does)
  // contain function pointers.
  function ExampleService() {
    
    var service = {
      getBestMovie : getBestMovie
    };
    
    return service;
    
    // To keep it simple, this service only return a single function that finds
    // the best-rated movie in a list of movies.
    function getBestMovie(movies) {
      
      var bestMovie = movies[0];
      
      for (var i = 1; i < movies.length; i++) {
        
        if (movies[i].rating > bestMovie.rating) {
          bestMovie = movies[i];
        }
        
      }
      
      return bestMovie;
      
    }
    
  }
  
})();
