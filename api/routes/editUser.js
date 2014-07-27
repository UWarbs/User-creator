var User = require('../models/user.js');

module.exports = function(app) {
	app.put('/api/edit/:_id', function(req, res){
		User.findById(req.params._id, function(err, user){
			if(err){
				res.send(err);
			}

			user.contact.email = req.body.email;
			user.contact.phone = req.body.phone;
			user.contact.address = req.body.address;
			user.newsLetters.angular = req.body.angular;
			user.newsLetters.node = req.body.node;
			user.age = req.body.age;
			user.username = req.body.username;
	
			user.save(function(err, resUser){
				if(err){return res.send(500, 'Error editing User' + err);}
			})
		});
	})
}