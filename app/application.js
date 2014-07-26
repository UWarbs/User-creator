require('angular');
require('angular-route');

var mainApp = angular.module('mainApp', ['ngRoute']); 

//====CONTROLLERS=====
require('./angModules/create/CreateCtrl')(mainApp);

//====ROUTES=====
mainApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: 'templates/landing.html'
			})
			.when('/add-user', {
				templateUrl: 'templates/addUser.html',
				controller: 'CreateCtrl'
			});
	}
]);
	




