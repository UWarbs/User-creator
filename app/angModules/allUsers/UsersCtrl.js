module.exports = function(mainApp){
  mainApp.controller('UsersCtrl', [ '$scope', '$http', '$location', 'userService',
    function ($scope, $http, $location, userService) {
    
    $scope.users;
    $scope.user;
    getAllUsers();
    
    function getAllUsers() {
      userService.getAll()
      .success(function (users) {
        $scope.users = users;
      })
      .error(function (error) {
        $scope.status = 'Unable to load user data: ' + error.message;
      });
    }

    $scope.deleteUser = function(){
      var id = this.user._id;
      userService.deleteOne(id)
      .success(function(){
        getAllUsers();
      }).error(function(error){
        console.log('error deleting user:' + error.message);
      });
    } 

    $scope.goToUser = function(){
      var id = this.user._id;
      userService.getOne(id)
      .success(function(data){
        $scope.user = data;
        $location.path('/view/' + $scope.user.username);
      }).error(function(error){
        console.log('error in GET request: ' + error.message);
      });
    }
    

  }]);


};