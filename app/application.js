require('angular');
require('angular-route');

var mainApp = angular.module('mainApp', ['ngRoute']); 

//=====CONTROLLERS=====
require('./angModules/create/CreateCtrl')(mainApp);
require('./angModules/allUsers/UsersCtrl')(mainApp);

//=====SERVICES=====
require('./angModules/allUsers/userService')(mainApp);

//=====ROUTES=====
mainApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/landing.html'
			})
			.when('/signup', {
				templateUrl: 'templates/signup.html',
				controller: 'CreateCtrl'
			})
			.when('/all-users', {
				templateUrl: 'templates/showAllUsers.html',
				controller: 'UsersCtrl'
			})
			.when('/view/:username', {
				templateUrl: 'templates/viewUser.html',
				controller: 'UsersCtrl'
			});
	}
]);