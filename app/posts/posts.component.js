(function() {
  'use strict'
  //just defining the module
    angular
      .module('redditClone')
      .component('posts', {
        controller: 'postController',
        templateUrl: 'app/posts/posts.html'
      })

}());
