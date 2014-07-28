module.exports = function getUserData($http, id, callback) {
  $http.get('/api/view/' + id)
  	.success(function(userDoc) {
    callback(userDoc);
  	});
};