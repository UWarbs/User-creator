var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');

var app = express();
mongoose.connect('mongodb://localhost/users');

var jwtauth = require('./api/lib/jwtAuth')(app);
app.set('jwtTokenSecret', process.env.JWT_SECRET || 'Changeme');

//JWT AUTH
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

//PASSPORT
app.use(passport.initialize());
require('./api/lib/passport');


//=====API Routes=====
require('./api/routes/createUser')(app, passport, jwtauth.auth); //User creater
require('./api/routes/allUsers')(app); //Shows all users
require('./api/routes/deleteUser')(app); // delete user
require('./api/routes/editUser')(app, jwtauth.auth);  //edit user
require('./api/routes/viewUser')(app); //show single user

var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});