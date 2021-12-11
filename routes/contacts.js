const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const { contactsValidator } = require('../middlewares/contactsValidator');
const validationHandler = require('../middlewares/validatorMiddleware');

router.post('/', contactsValidator, validationHandler, contactsController.create);

module.exports = router;
