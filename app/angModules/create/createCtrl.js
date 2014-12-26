module.exports = function(mainApp){
  mainApp.controller('CreateCtrl', [ '$scope', '$cookies', '$location', '$http', 'userService',
                      function ($scope, $cookies, $location, $http, userService) {
  	$scope.user = {};
    //Saves a user to the db and clears form
  	$scope.save = function(){
  		userService.create($scope.user)
        .success(function(data){
          console.log('success');
          if(data.jwt_token){
            $cookies.jwt_token = data.jwt_token;
            $location.path('/dashboard');
          }else{
            console.log('success but no token');
          }
        }).error(function(data){
          console.log('error ' + data);
        });
      $scope.user = {};
    }
	}]);
};