var myApp = angular.module('myApp', []);
myApp.controller('AppController', ['$scope', '$http', function ($scope, $http) {
	console.log("Hello World from controller")

	var refresh = function () {
		$http.get('/contactlist').success(function (res) {
			console.log("i got the data")
			$scope.contactlist = res;
			$scope.contact + "";
		})
	}

	refresh();

	$scope.addContact = function () {
		console.log($scope.contact)
		$http.post('/contactlist', $scope.contact).success(function (res) {
			console.log(res);
			refresh();
		});
	}

}])