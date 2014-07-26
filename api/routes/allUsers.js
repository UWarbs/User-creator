var User = require('../models/user.js');


// /api/standing-view/:league
// GET request for the selected league
module.exports = function(app) {
	app.get('/api/all-users', function(req, res){
		console.log(req);

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