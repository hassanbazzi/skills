var app = angular.module('myapp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
    	url: "/",
    	templateUrl: "/partials/home.html"
    })
    .state('messages', {
    	url: "/messages",
    	templateUrl: "/partials/messages.html",
    	controller: 'messagesCtrl',
    	resolve: {
		  postPromise: ['messageService', function(messageService){
		    return messageService.getAll();
		  }]
		}
    })
    .state('messages.post', {
    	url: "/messages/post",
    	templateUrl: "/partials/messages.post.html",
    	controller: 'postCtrl'
    });
  
});