require('angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var mainApp = angular.module('mainApp', ['ngRoute', 'base64', 'ngCookies']); 

//=====CONTROLLERS=====
require('./angModules/create/CreateCtrl')(mainApp);
require('./angModules/create/LoginCtrl')(mainApp);
require('./angModules/allUsers/UsersCtrl')(mainApp);
require('./angModules/dashboard/DashboardCtrl')(mainApp);

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
			})
			.when('/dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardCtrl'
			})
			.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			});
	}
]);