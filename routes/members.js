var express = require('express');
var router = express.Router();

const { membersValidation, validationHandler } = require('../middlewares/membersValidator');
const membersController = require('../controllers/membersController')


router.post('/', membersValidation, validationHandler, membersController.create);

module.exports = router;
