var express = require('express');
var router = express.Router();
const { registerValidation, validationHandler } = require('../middlewares/registerValidator');
const registerController = require('../controllers/registerController')

router.post('/', registerValidation, validationHandler, registerController.create);

module.exports = router;
