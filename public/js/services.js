app.factory('messageService', ['$http', function($http){
  var o = {
    messages: []
  };
  o.getAll = function() {
    return $http.get('/messages').success(function(data){
    	console.log(data);
      angular.copy(data, o.messages);
    })
    .error(function(data){

    });
  };
  o.create = function(message) {
  	return $http.post('/messages', message).success(function(data){
  		o.messages.push(data);
  	});
  };
  o.delete = function(id){
  	return $http.get('/messages/delete/' + id).success(function(data){
  		o.messages.splice(data,1);
  	});
  }
  return o;
}]);