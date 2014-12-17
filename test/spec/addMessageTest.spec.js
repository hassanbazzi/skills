/*describe('Unit: messagesCtrl', function() {
  // Load the module with MainController
  var scope;
  var ctrl;

  beforeEach(module('myapp'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('messagesCtrl', {$scope: scope});
  }));
  it('should add message to messages list', 
    function() {
    var numMessages = $scope.messages.length;
    $scope.addMessage();
    expect($scope.modalRole).toEqual('add');
    $scope.messageBody = 'this is a unit test';
    $scope.submit();
    expect($scope.messages.length).toEqual(numMessages+1);
  });
})
*/