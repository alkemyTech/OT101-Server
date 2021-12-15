var express = require('express');
var router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');

const { membersValidation, validationHandler } = require('../middlewares/membersValidator');
const membersController = require('../controllers/membersController')

router.get('/', /* verifyToken, isAdmin, */ membersController.list);
router.post('/', membersValidation, validationHandler, membersController.create);

module.exports = router;
