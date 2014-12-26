var getUserData = require('../../assets/helperjs/getUserData');

module.exports = function(mainApp){
  mainApp.controller('DashboardCtrl', [ '$scope', '$cookies', '$location', '$http', 'userService',
                      function ($scope, $cookies, $location, $http, userService) {
  	//COOOOOOKKIESSS
    if(!$cookies.jwt_token){
      location.path('/login');
    }
    //all request should send token
    $http.defaults.headers.common.jwt_token = $cookies.jwt_token;
    $scope.loggedIn = $cookies.jwt_token;

    getUserData($http, function(userData){
      setUser(userData);
      console.log($scope.user);
    });

    function setUser(userDoc){
      $scope.user = userDoc;
    }
	}]);
};