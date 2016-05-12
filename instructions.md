/////////////////////////////////////
//Initial Setup of Node and Express//
/////////////////////////////////////

Step 1: Open up three terminal windows and make sure you're using Node version 4.2.2 in each.
	$nvm use v4.2.2

Step 2: Create a new respository on github and complete set up instructions.

Step 3: Create a directory to hold all your front-end code (app), and a directory to hold all your back-end code (server).

Step 4: Create a file (server.js - DO NOT CALL IT app.js as it will conflict with Angular) to act as your server to hold all your API calls, dependency injections, etc.

Step 5: Create a package.json file with at least a name and a version number. Example: 
	{
	"name": "<myAppName>",
	"version": "0.0.1"
	}

Step 6: Using your terminal, install express, mongoose and body-parser and save them to your package.json file.
	$npm install --save express mongoose body-parser

Step 7: Claim the above as dependencies in your app in your server.js file. Example:
	var express = require('express');
	var mongoose = require('mongoose');
	var bodyParser = require('body-parser');


Step 8: Make your app an instance of express in your server.js file. Example:
	var app = express();

Step 9: In your server.js file, run your node app so it listens on port XXXX. Example: 
	app.listen('3000', function(){
		console.log("I'm listening!");
	});

Step 10: Run your node server in your terminal (in the directory that your server file is located).
	$node server

Step 11: Build get request for our root route in the server.js file. Example: 
	app.get('/', function(req, res) {
		res.sendFile(__dirname + '/index.html');
	});

Step 12: You will need to restart the server each time you modify the server.js file. Test to make sure you can view the sent file when a call is made.


///////////////////////////////////////
//Initial Setup of Mongo and Mongoose//
///////////////////////////////////////

Step 13: (Make sure Mongo is properly installed first, then...) In your terminal, install mongodb to your local dev environment. First step is to go to your app directory and create a database. Example:
	$mkdir -p /data/db

Step 14: Move into the /data/db directory. Example:
	$cd /data
	$cd db

Step 15: In a new terminal window (with the correct version of Node) run mongodb. Example: 
	$mongod

Step 16: In yet another terminal window (with the correct version of Node) open a mongo shell. Example:
	$mongo

Step 17: Switch to the database you want to use. (To create a new one, simply type in the name of the new database you want to create after 'use'). Example:
	use <nameOfMyDatabase>

Step 18: In your server.js file, connect your app to the mongo database. (The port number can be found on the Mongo terminal window) Example:
	mongoose.connect('mongodb://localhost:27017/<nameOfMyDatabase>');

Step 19: In your server directory, create your datasets. Example:
	$cd server
	$mkdir datasets
	$cd datasets
	$touch users.js

Step 20: Require mongoose in your dataset files as a dependency. Example:
	var mongoose = require('mongoose');

Step 21: Export your datsets as modules. (First parameter is the name of the model. Second paramater is the data of the model) Example:
	module.export = mongoose.model('User', {
		email: String,
		password: String
	});

//////////////////////////////////////////
//Initial Setup of Angular and Bootstrap//
//////////////////////////////////////////

Step 22: In your terminal, download Angular. Example:
	$ npm install --save angular@1.5.5

Step 23: Create an app.js file for Angular in your app directory. Example:
	$cd mean-stack-social-network
	$cd app
	$touch app.js

Step 24: In your app.js file, wrap your angular code in an anonymous function so that when you minify your javascript files your ports will not collide. Example: 
	(function() {
		angular.module('TimeWaste', []);
		}());

Step 25: Invoke your middleware for paths for app and node_modules directories in the server.js file. Example:
	app.use('/app', express.static(__dirname + "/app"));
	app.use('/node_modules', express.static(__dirname + "/node_modules"));

Step 26: Add a script tag to include Angular in your index.html file. Example:
	<script src="node_modules/angular/angular.min.js"></script>

Step 27: Include the Angular app.js in your index file. Example: 
	<script src="app/app.js"></script>

Step 28: Create an Angular app by declaring it in your index.html file. Example:
	<html ng-app="<myAppName>">
	...
	
Step 29: Install Bootstrap into your app. Example:
	$ npm install --save bootstrap

Step 30: Add bootstrap using a script tag in your index.html file. Example:
	<head>
		<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
	</head>

Step 31: Add a navbar to the top with a fixed-top to the index.html file. Example:
	<body>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
			</div>
		</nav>
		...

///////////
//ROUTING//
///////////

Step 32: Add the CDN for ui-router at cdnjs.com/libraries/angular-ui-router and add it to your index.html file. Example:
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js"></script>

Step 33: Add ui-router as a dependancy to angular in your app.js file. Example:
	(function() {
		angular.module('TimeWaste', ['ui.router']);
	}());

Step 34: Set up your configuration for your angular states in your app.js file. Example:
	(function() {
	angular.module('TimeWaste', ['ui.router'])
		.config(function($stateProvider) {

		$stateProvider
			.state('signUp', {
				url: '/signup',
				templateUrl: 'app/signup/signup.html',
				controller: 'SignUpController'
			})
		})
	}());

Step 35: In the app directory, create your new controller and view. Example:
	$ cd app
	$ mkdir signup
	$ cd signup
	$ touch signup.html
	$ touch signup-controller.js

Step 36: Create your new controller in your new (signup-)controller file (wrapped in an anonymous function). Example:
	(function() {
	<!-- We're adding data to the angular module so it must begin with angular.module -->
		angular.module('TimeWaste')
		.controller('SignupController', ['$scope','$state', function($scope, $state) {

		}]);
	}());

Step 37: In your new view file, create a basic html file to test. Example:
	<div class="row">
	<div class="col-sm-6">
		<div class="row">
			<strong>Email Address</strong>
			<input type="text" ng-model="newUser.email" class="form-control"></input>
		</div>
		<div class="row">
			<strong>Password</strong>
			<input type="text" ng-model="newUser.password" class="form-control"></input>
		</div>
		<button ng-click="createUser()">Submit</button>
	</div>
</div>

Step 38: Notify Angular of the ui-view in your index.html file. Example:
		</nav>
		<div ui-view></div>
	</body>

Step 39: Add the controller in your index.html file. Example:
	<!-- Controllers: -->
	<script src="app/signup/signup-controller.js"></script>

Step 40: In your navbar, create links to different routes in your app to test functionality. Example:
		<div class="container">
			<div> <input type="text" ng-model="login.email"> <input type="password" ng-model="login.password"> <button>Login</button> <a ui-sref="signUp">Create an Account</a>
			</div>
		</div>
	</nav>

////////////////////
//Create CSS files//
////////////////////

Step 41: In your app directory, create new CSS directory and inside of that new directory, create a main.css file. Example:
	$ cd app
	$ mkdir css
	$ cd css
	$ touch main.css

Step 42: Add code to your new main.css file to improve styling. Example:
	/* Base Elements */

	body {
		margin-top: 70px;
	}

Step 43: Move the navbar outside of the <body> tag.(Move it so it sits just above the body tag) Example:
	</head>
	<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container">
				<div> <input type="text" ng-model="login.email"></input><input type="password" ng-model="login.password"></input><button>Login</button><a ui-sref="signUp">Create an Account</a>
				</div>
			</div>
		</nav>
	<body>

Step 44: Link your new stylesheet in the index.html file. Example:
	<link rel="stylesheet" type="text/css" href="app/css/main.css">
	</head>

Step 45: Fix up styling by centering input fields in the signup.html file. Example:
	<div class="col-sm-6 col-sm-offset-3">

///////////////////////
//MONGO POST REQUESTS//
///////////////////////

Step 46: 
