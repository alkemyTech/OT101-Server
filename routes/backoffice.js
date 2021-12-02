var express = require('express');
var router = express.Router();
const backofficeController = require('../controllers/backofficeController');

router.get('/contacts', backofficeController.listContacts);

module.exports = router;