(function() {
	angular.module('TimeWaste')
	.controller('NavigationController', ['$scope','$state','$http', function($scope, $state, $http) {

		if (localStorage['User-Data']) {
			$scope.loggedIn = true;
		} else {
			$scope.loggedIn = false;
		}

		$scope.logUserIn = function() {
			$http.post('/api/user/login', $scope.login).success(function(response) {
				// Creating a local storage instance as a services
				localStorage.setItem('User-Data', JSON.stringify(response));
				// Updating loggedIn variable to true to update navbar display
				$scope.loggedIn = true;
			}).error(function(error) {
				console.log(error);
			})
		}	
	}]);
}());