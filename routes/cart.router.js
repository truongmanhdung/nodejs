var express = require('express');
var controller = require('../controllers/cart.controller.js');
var validate = require('../validators/user.validate.js');
var router = express.Router();
router.get('/add/:productId',controller.addToCart);
module.exports = router;