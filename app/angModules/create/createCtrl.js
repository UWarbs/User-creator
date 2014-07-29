module.exports = function(mainApp){
  mainApp.controller('CreateCtrl', [ '$scope', '$http', '$location', 'userService',
                      function ($scope, $http, $location, userService) {
  	$scope.user = {};
  	
    //Saves a user to the db and clears form
  	$scope.save = function(){
      var check = isNaN($scope.user.age);
      if(check){
        alert('age must be a number');
        return false;
      }
  		userService.create($scope.user);
      $scope.user = {};
    }
	}]);
};
