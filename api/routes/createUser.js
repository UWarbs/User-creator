var User = require('../models/user.js');

module.exports = function(app){
	app.post('/api/add-user', function(req, res){
		User.findOne({'email': req.body.email}, function(err, user){
			if(err){
				req.send(500, err);
				return false;
			}
			if(user){
				res.send(409, {'msg': 'A user with this email already exists'});
			}
		
			var newUser = new User({});
			newUser.email = req.body.email;
			newUser.name = req.body.name;
	
			newUser.save(function(err, resNewUser){
				if(err){return res.send(500, 'Error adding User' + err);}
				res.json({'jwt_token': resNewUser.createToken(app)});
			});
		});
	});
};