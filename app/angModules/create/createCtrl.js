module.exports = function(mainApp){
  mainApp.controller('CreateCtrl', [ '$scope', '$http', 'userService',
                      function ($scope, $http, userService) {
  	$scope.user = {};
  	
    //Saves a user to the db and clears form
  	$scope.save = function(){
  		userService.create($scope.user);
      $scope.user = {};
    }
	}]);
};
