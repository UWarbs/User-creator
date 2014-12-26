var User = require('../models/user.js');

module.exports = function(app) {
	app.get('/api/all-users', function(req, res){

		res.setHeader('Content-Type', 'application/json');
	
		User.find(
		{}, null,
		function(err, users) {
			if(err) {
				res.send(500, {'error': err});
				return false;
			};
			res.send(users);
		}); 

	});
};