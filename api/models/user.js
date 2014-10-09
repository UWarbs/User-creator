var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	hunter: Boolean,
	landowner: Boolean,
	
	contact: {
		email: String,
		phone: String,
		address: String
	}

});

module.exports = mongoose.model('User', userSchema);