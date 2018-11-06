const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

//Simple test URL to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.get('/klk', product_controller.keloke); 

module.exports = router;
