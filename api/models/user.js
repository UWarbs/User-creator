var mongoose = require('mongoose');;

var playerSchema = new mongoose.Schema({
	name: String,
	age: Number,

	//True if subscribed
	newsLetters: {
		angular: Boolean,
		node: Boolean,
	}
	
	contact: {
		email: String,
		phone: String,
		address: String
	}

});

module.exports = mongoose.model('User', userSchema);