var express = require('express');
var controller = require('../controllers/product.controller.js');
var validate = require('../validators/user.validate.js');
var router = express.Router();
router.get('/',controller.products);
module.exports = router;