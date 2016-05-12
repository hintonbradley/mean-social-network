// Step 20: Requiring mongoose as a dependancy
var mongoose = require('mongoose');

// Step 21: Exporting datsets as modules. (First paramater is the model name. Second paramater is the model data.)
module.exports = mongoose.model('User', {
		email: String,
		password: String
	});