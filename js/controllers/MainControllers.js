angular.module('MainCtrl',["MessageService"])
	.controller('MainControllers', function ($scope, Message){
		$scope.newMessage = '';

		Message.getAll().success(function (data) {
			$scope.messages = data;
		});

		$scope.new =function () {
			if ($scope.newMessage){
			Message.add(newMessage).success(function (data
				) {
				$scope.messages.push(message);
			});
		  }
		};
});