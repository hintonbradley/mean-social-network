var User = require('../datasets/users');

module.exports.signup = function (req, res) {
	var user = new User(req.body);
	user.save();

	res.json(req.body);
}

module.exports.login = function (req, res) {
	// Requesting Mongo to find find user entry by req.body (email and password)
	User.find(req.body, function(err, results) {
		if (err) {
			console.log("Error is: ", err);
		} else {
			// Adding another if statement if request is a success. If there is only one result from the Mongo db then...
			if (results && results.length === 1) {
				// userData is going to be the response object from Mongo
				var userData = results[0];
				// and we're going to respond with the email and unique Mongo user id.
				res.json({email: req.body.email,
							_id: userData._id});
			} else {
				console.log("Something is wrong. The results are: ", results);
			}
		}
	})
};