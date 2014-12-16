app.factory('messageService', ['$http', function($http){
  var o = {
    messages: []
  };
  o.getAll = function() {
  	return $http.get('/messages').success(function(data){
  		angular.copy(data, o.messages);
    });
  };
  o.create = function(message) {
  	return $http.post('/messages/post', message).success(function(data){
  		o.messages.push(data);
  	});
  };
  return o;
}]);