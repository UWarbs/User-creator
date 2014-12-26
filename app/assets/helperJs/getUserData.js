module.exports = function getUserData($http, callback){
	$http({
		method: 'GET',
		url: '/api/user-data'
	}).success(function(userDoc){
		callback(userDoc);
	});
};