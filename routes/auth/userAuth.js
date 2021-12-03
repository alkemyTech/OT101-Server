var express = require('express');
var router = express.Router();

const { userAuthValidation, validationHandler } = require('../../middlewares/userAuthValidator');
const userAuthController = require('../../controllers/userAuthController');

router.post('/', userAuthValidation, validationHandler, userAuthController.findOne);

module.exports = router;
