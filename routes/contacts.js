const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const contactsController = require('../controllers/contactsController');
const { contactsValidator } = require('../middlewares/contactsValidator');
const validationHandler = require('../middlewares/validatorMiddleware');

router.post('/', contactsValidator, validationHandler, contactsController.create);
router.get('/', isAdmin, contactsController.listContacts)


module.exports = router;
