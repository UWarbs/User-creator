module.exports = function(mainApp){
  mainApp.controller('LoginCtrl', [ '$scope', '$cookies', '$location', '$base64', '$http', 'userService',
                      function ($scope, $cookies, $location, $base64, $http, userService) {
  	//COOOOOOKKIESSS
    if($cookies.jwt_token){
      $location.path('/dashboard');
    }

    $scope.login = function(){
      console.log($base64.encode($scope.user.email + ':' + $scope.user.password));
      $http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode($scope.user.email + ":" + $scope.user.password);

      userService.getAll()
        .success(function(data){
          if(data.jwt_token){
            $cookies.jwt_token = data.jwt_token;
            $location.path('/dasboard');
          } else{
            console.log('login failed');
            $scope.failedLogin = 'Incorrect email/password combo';
          }
        }).error(function(data){
          console.log('err', data);
        });
    };

	}]);
};