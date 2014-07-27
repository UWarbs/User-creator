module.exports = function(mainApp){
  mainApp.controller('ShowUsersCtrl', [ '$scope', '$http', '$location',
                      function ($scope, $http, $location) {
  	
    $http.get('/api/all-users')
      .success(function(data){
        console.log(data);
        $scope.users = data;
      }).error(function(data){
        console.log('error in GET request');
      });
  
  }]);
};