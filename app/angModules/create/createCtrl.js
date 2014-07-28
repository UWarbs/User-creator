module.exports = function(mainApp){
  mainApp.controller('CreateCtrl', [ '$scope', '$http', '$location',
                      function ($scope, $http, $location) {
  	$scope.user = {};
  	
  	$scope.save = function(){
  		console.log($scope.user);
  		$http.post('/api/add-user', $scope.user)
  			.success(function(data){
  				//clear form
  			}).error(function(data){
  				console.log("error in POST request");
  			});
  	}
	}]);
};
