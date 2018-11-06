const Product = require('../models/product.model');

//Simple version, without validtion
exports.test = function (req, res) {
	res.send('Greetings from the Test controller!');
};

exports.keloke = function (req, res) {
	res.send('Keloke');
};
