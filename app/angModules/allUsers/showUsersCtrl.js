module.exports = function(mainApp){
  mainApp.controller('ShowUsersCtrl', [ '$scope', '$http', '$location',
                      function ($scope, $http, $location) {
  	var pageLoad = function(){
      $http.get('/api/all-users')
        .success(function(data){
          $scope.users = data;
        }).error(function(data){
          console.log('error in GET request');
        });
    }

    pageLoad();

    $scope.deleteUser = function(){
        $http.delete('/api/delete/'+this.user._id)
          .success(function(){
            pageLoad();
          }).error(function(){
            console.log('error deleting user');
          });
    } 
  
  }]);


};