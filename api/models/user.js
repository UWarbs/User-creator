var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');
var jwt      = require('jwt-simple');
var moment   = require('moment');

var userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	hunter: Boolean,
	landowner: Boolean,
	basic:{
		email: String,
		password: String
	},
	contact: {
		phone: String,
		address: String
	}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.basic.password);
};

userSchema.methods.createToken = function(app){
	var expires = moment().add(7, 'days').valueOf();
	var that = this;
	var token = jwt.encode({
		iss: that._id,
		expires: expires
	}, app.get('jwtTokenSecret'));
	return token;
};
module.exports = mongoose.model('User', userSchema);