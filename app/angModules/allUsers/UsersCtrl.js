var getUserData = require('../../getUserData');
module.exports = function(mainApp){
  mainApp.controller('UsersCtrl', [ '$scope', '$http', '$location', 'userService',
    function ($scope, $http, $location, userService) {
    
    $scope.check = "";
    $scope.editmn = true;
    $scope.showfrm = false;
    
    $scope.currUser = {};
    $scope.users;
    
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

    $scope.deleteUser = function(id){
      userService.deleteOne(id)
        .success(function(){
          getAllUsers();
        }).error(function(error){
          console.log('error deleting user:' + error.message);
        });
    } 
    
    $scope.edit = function(id) {
      console.log(id);
      $scope.editmode = true;
      userService.getOne(id)
        .success(function(user){
          $scope.currUser = user;
          console.log($scope.currUser);
        })
    }
    
    $scope.cancel = function() {
      $scope.editmode = false;
      $scope.editRow = {};
    }
    
    $scope.save = function(id) {
      console.log('updated cyurruser: ');
      console.log($scope.currUser);
      userService.edit(id, $scope.currUser)
        .success(function(){
          $scope.editRow = {};
        })
        .error(function(error){
          $scope.status = 'unable to edit user: ' + error.message;
        });
      getAllUsers();
      $scope.editmode = false;
    }
    



    
    /*function setUser(userDoc){
      $scope.user= userDoc;
    }
    $scope.goToUser = function(id){
      getUserData($http, id, function(userData) {

        setUser(userData);
        console.log($scope.user);
        $location.path('/view/' + $scope.user.username);
      });
    }*/
  
  }]);
};