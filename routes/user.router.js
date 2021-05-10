var express = require('express');
var multer = require('multer');
var controller = require('../controllers/user.controller.js');
var validate = require('../validators/user.validate.js');
var upload = multer({ dest: './public/uploads/'});
var router = express.Router();
router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/create',controller.create);
router.get('/:id',controller.createget);

router.post('/create',upload.single('avatar'),validate.createpost, controller.createpost);
module.exports = router;