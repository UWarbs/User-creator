var User = require('../models/user.js');

module.exports = function(app, passport, jwtauth) {
	app.get('/api/view/:_id', function(req, res){
		
		res.setHeader('Content-Type', 'application/json');
		
		User.findById(req.params._id, function(err, user){
			if(err){
				res.send(err);
			}
			res.send(user);
		});
	});
	app.get('api/user-data', jwtauth, function(req, res){
		res.setHeader('Content-Type', 'application/json');
		res.send(req.user);
	});
}