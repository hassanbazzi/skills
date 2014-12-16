app.controller('messagesCtrl', ['$scope', 'messageService', function($scope, messageService){
	$scope.messages = messageService.messages;
	$scope.messageID = 0;
	$scope.addMessage = function(){
		$scope.showMessageModal('add');
		$scope.messageBody = '';
	};
	$scope.editMessage = function(message){
		$scope.showMessageModal('edit');
		$scope.messageBody = message.content;
	}
	$scope.deleteMessage = function(message){
		id = message._id;
		$scope.showMessageModal('delete');
		$scope.messageID = id;
	}
	$scope.showMessageModal = function(role){
		$scope.modalRole = role;
		$('.message.modal').modal('show');
	};
	$scope.submit = function(){
		if(!$scope.messageBody || $scope.messageBody == ''){return;}
		var message = {content : $scope.messageBody};

		messageService.create(message);
	}
	$scope.delete = function(id){
		messageService.delete(id);
	}

}]);