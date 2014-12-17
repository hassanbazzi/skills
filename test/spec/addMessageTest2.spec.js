describe('messagesCtrl', function() {

    beforeEach(module('myapp'));

    var createController, scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();

        createController = function() {
            return $controller('messagesCtrl', { 
                $scope: scope,
            });
        };
    }));


    it ("should work", function() {
          var  controller = createController();
var messages = $scope.messages;
        expect(scope.messages.length).toBe(1);
    });

});