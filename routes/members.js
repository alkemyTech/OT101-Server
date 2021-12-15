var express = require('express');
var router = express.Router();
const isAdmin = require('../middlewares/isAdmin');

const { membersValidation, validationHandler } = require('../middlewares/membersValidator');
const membersController = require('../controllers/membersController')

router.get('/', isAdmin, membersController.list);
router.post('/', membersValidation, validationHandler, membersController.create);

module.exports = router;
