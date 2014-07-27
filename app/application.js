require('angular');
require('angular-route');

var mainApp = angular.module('mainApp', ['ngRoute']); 

//=====CONTROLLERS=====
require('./angModules/create/CreateCtrl')(mainApp);
require('./angModules/allUsers/UsersCtrl')(mainApp);
require('./angModules/edit/editUserCtrl')(mainApp);

//=====SERVICES=====
require('./angModules/allUsers/userService')(mainApp);

//=====ROUTES=====
mainApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/landing.html'
			})
			.when('/add-user', {
				templateUrl: 'templates/addUser.html',
				controller: 'CreateCtrl'
			})
			.when('/all-users', {
				templateUrl: 'templates/showAllUsers.html',
				controller: 'UsersCtrl'
			})
			.when('/edit/:username', {
				templateUrl: 'templates/editUser.html',
				controller: 'EditUserCtrl'
			})
			.when('/view/:username', {
				templateUrl: 'templates/viewUser.html',
				controller: 'UsersCtrl'
			});
	}
]);
	




