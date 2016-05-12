(function() {
	angular.module('TimeWaste')
	.controller('SignupController', ['$scope','$state', '$http', function($scope, $state, $http) {

		// Step 47: Adding a function to create a new user
		$scope.createUser = function() {
			// Namespacing isn't necessary as we have already declared our models (input fields) within the confines of an object. Eg-newUser
			$http.post('api/user/signup', $scope.newUser).success(function(response) {

			}).error(function(error) {
				console.log(error);
			})
		}
	}]);
}());