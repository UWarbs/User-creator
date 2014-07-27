var User = require('../models/user.js');

module.exports = function(app) {
	app.delete('/api/delete/:_id', function(req, res){
		User.remove({
			_id: req.params._id
		}, function(err, user) {
			if (err){
				res.send(err);
			}
			res.json({ message: 'Successfully deleted' });
		});
	});

}
