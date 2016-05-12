// Step 7: Claiming dependencies from package.json
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Step 8: Creating an instance of express
var app = express();

// Requiring controllers:
var authenticationController = require('./server/controllers/authentication-controller');

// Step 18: Connecting to the new mongo database
mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

// Step 11: Creating an app.get requrest for home route
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// Authentication
// Creating a post request equal to the post route created in the signup-controller (api/user/signup), and then calling the signup function inside the authenticationController
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

// Step 9: Making our app listen on port 3000
app.listen('3000', function(){
	console.log("I'm listening!")
});