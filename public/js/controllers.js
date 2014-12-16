app.controller('messagesCtrl', ['$scope', 'messageService', function($scope, messageService){
	$scope.messages = messageService.messages;
	$scope.addMessage = function(){
		$scope.showMessageModal('add');
		$scope.messageBody = '';
	};
	$scope.editMessage = function(message){
		$scope.showMessageModal('edit');
		$scope.messageBody = message.content;
	}
	$scope.deleteMessage = function(id){
		$scope.showMessageModal('delete');
	}
	$scope.showMessageModal = function(role){
		$scope.modalRole = role;
		$('.message.modal').modal('show');
	};

}]);