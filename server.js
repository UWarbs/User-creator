var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/users');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.set('port', process.env.PORT || 3000);

//=====API Routes=====
//app.post('/api/v1/add-user', file);
//require('./api/routes/playerCreate')(app, passport, jwtauth.auth); //Player creater
//require('./api/routes/standingsRoute')(app); //Shows standings
//require('./api/routes/addLeague')(app, jwtauth.auth);//adds league to player account

var server = http.createServer(app);

server.listen(app.get('port'), function () {
	console.log('Server start on:' + app.get('port'));
});
