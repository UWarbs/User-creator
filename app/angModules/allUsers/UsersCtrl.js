module.exports = function(mainApp){
  mainApp.controller('UsersCtrl', [ '$scope', '$http', 'userService',
    function ($scope, $http, userService) {
   
    $scope.currUser = {};
    $scope.users;
    
    //call function on page load to populate table
    getAllUsers();
    
    function getAllUsers() {
      userService.getAll()
        .success(function (users) {
          $scope.users = users;
        })
        .error(function (error) {
          console.log('Unable to load user data: ' + error.message);
        });
    }

    //deletes selected user
    $scope.deleteUser = function(id){
      userService.deleteOne(id)
        .success(function(){
          getAllUsers();
        }).error(function(error){
          console.log('error deleting user:' + error.message);
        });
    } 
    
    //GETs selected users info, opens edit form, and populates it w/user info
    $scope.edit = function(id) {
      $scope.editmode = true;
      userService.getOne(id)
        .success(function(user){
          $scope.currUser = user;
        })
    }
    
    //PUT request for selected user, updates info in db and browser
    $scope.save = function(id) {
      userService.edit(id, $scope.currUser);
      getAllUsers();
      $scope.editmode = false;
    }
    
    //cancels edit form
    $scope.cancel = function() {
      $scope.editmode = false;
    }
  }]);
};