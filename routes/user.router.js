var express = require('express');
var controller = require('../controllers/user.controller.js');
var router = express.Router();
router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',controller.create);
router.get('/:id',controller.createget);

router.post('/create',controller.createpost);
module.exports = router;