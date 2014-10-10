'use strict';

var User = require('../models/user.js');
var jwt = require('jwt-simple');

module.exports = function(app){
	var jwtauth = {};

	jwtauth.auth = function(req, res, next){
		var token = req.headers.jwt_token;

		if(token){
			try{
				var decoded = jwt.decode(token, app.get('jwtTokenSecret'));

				User.findOne({'_id': decoded.iss}, function(err, user){
					if(err){return res.send(500, err);}

					if(new Date(decoded.expires).getTime() < new Date().getTime()){
						{
						return res.send(401, {'msg': 'expired token'});
						}
					};

					//perform if token accepted
					req.user = user;
					return next();
				});
			}catch(err){
				return res.send(500);
			}
		}else{
			return res.send(401, {'msg': 'no token found'});
		}
		
		
	};
	return jwtauth;
}