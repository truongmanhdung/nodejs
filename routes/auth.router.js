var express = require('express');
var controller = require('../controllers/auth.controller.js');
var router = express.Router();
router.get('/login',controller.login);
router.post('/login', controller.postlogin);

module.exports = router;