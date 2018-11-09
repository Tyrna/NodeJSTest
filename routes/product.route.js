const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

//Simple test URL to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

//Expected path to CREATE
router.post('/create', product_controller.product_create);

module.exports = router;
