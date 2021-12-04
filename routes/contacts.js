var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController');
const isAdmin = require('../middlewares/isAdmin');


router.get('/', isAdmin, contactsController.listContacts)


module.exports = router;
