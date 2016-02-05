var toDoApp = angular.module('toDoApp', ['ngRoute']);

toDoApp.controller('toDoCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('/user/userToDoList.json').success(function (data) {
		$scope.todolist = data;
	});
}]);
