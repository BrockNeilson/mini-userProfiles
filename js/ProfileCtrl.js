var app = angular.module('profiles');

app.controller('ProfileCtrl', function($scope, profileService){
	$scope.getUsers = function() {
		$scope.users = profileService.getUsers();
	};

	$scope.getUsers();

});
