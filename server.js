var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.set('port', process.env.PORT || 3000);

//=====API Routes=====
require('./api/routes/createUser')(app); //User creater
require('./api/routes/allUsers')(app); //Shows all users
require('./api/routes/deleteUser')(app); // delete user
require('./api/routes/editUser')(app);  //edit user
require('./api/routes/viewUser')(app); //show single user

var server = http.createServer(app);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});
