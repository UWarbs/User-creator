var User = require('../models/user.js');

module.exports = function(app) {
	app.put('/api/edit/:_id', function(req, res){
		User.findById(req.params._id, function(err, user){
			if(err){
				res.send(err);
			}

			user.contact.email = req.body.contact.email;
			user.contact.phone = req.body.contact.phone;
			user.contact.address = req.body.contact.address;
			user.newsLetters.angular = req.body.newsLetters.angular || false;
			user.newsLetters.node = req.body.newsLetters.node || false;
			user.age = req.body.age;
			user.username = req.body.username;
			user._id = req.body._id;
	
			user.save(function(err, resUser){
				if(err){return res.send(500, 'Error editing User' + err);}
			})
		});
	})
}