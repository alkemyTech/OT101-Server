const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const contactsController = require('../controllers/contactsController');
const { contactsValidator } = require('../middlewares/contactsValidator');
const validationHandler = require('../middlewares/validatorMiddleware');
const { verifyToken } = require('../middlewares/authJWT');

router.post(
  '/',
  /* contactsValidator,
  validationHandler, */
  contactsController.create
);
router.get('/', verifyToken, isAdmin, contactsController.list);

module.exports = router;
