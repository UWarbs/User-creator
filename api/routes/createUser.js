var User = require('../models/user.js');

module.exports = function(app){
	app.post('/api/add-user', function(req, res){
		User.findOne({'contact.email': req.body.email}, function(err, user){
			if(err){
				req.send(500, err);
				return false;
			}
			if(user){
				res.send(409, {'msg': 'A user with this email already exists'});
				return false;
			}
		
			var newUser = new User({});
			newUser.contact.email = req.body.email;
			newUser.contact.phone = req.body.phone;
			newUser.contact.address = req.body.address;
			newUser.hunter = req.body.hunter;
			newUser.landowner = req.body.landowner;
			newUser.firstName = req.body.firstName;
			newUser.lastName = req.body.lastName;
	
			newUser.save(function(err, resNewUser){
				if(err){return res.send(500, 'Error adding User' + err);}
				

			});
		});
	});
};