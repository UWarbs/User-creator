module.exports = function(mainApp){
  mainApp.controller('CreateCtrl', [ '$scope', '$http', '$location',
                      function ($scope, $http, $location) {
  	$scope.user = {};
  	
  	$scope.save = function(){
  		
      console.log($scope.user);
  	};
  }]);
};
