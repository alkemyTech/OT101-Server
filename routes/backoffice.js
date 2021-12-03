var express = require('express');
var router = express.Router();
const adminMiddleware = require ('../middlewares/isAdmin');
const backofficeController = require('../controllers/backofficeController');

router.get('/contacts', adminMiddleware, backofficeController.listContacts);

module.exports = router;