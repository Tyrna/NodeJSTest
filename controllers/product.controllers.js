const Product = require('../models/product.model');

//Simple version, without validtion
exports.test = function (req, res) {
	res.send('Greetigns from the Test controller!');
};
