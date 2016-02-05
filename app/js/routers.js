var toDoApp = angular.module('toDoApp', ['ngRoute']);

toDoApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'loginCtrl'
		}).
		when('/todolist', {
			templateUrl: 'partials/todolist.html',
			controller: 'toDoCtrl'
		}).
		otherwise({
			redirectTo: '/login'
		});
	}]);
