module.exports = function(mainApp){
	mainApp.factory('userService', ['$http', function($http){
		return {
			//GETs all users
			getAll: function(){
				return $http.get('/api/all-users');
			},
			getOne: function(id){
				return $http.get('/api/view/' + id)
			},
			//Creates a user
			create: function(data){
				return $http.post('/api', data);
			},
			//Deletes a user
			deleteOne: function(id){
				return $http.delete('/api/delete/' + id);
			},
			//Edits a user
			edit: function(id){
				return $http.put('/api/' + id);
			}
		}
	}]);
}