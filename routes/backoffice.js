var express = require('express');
var router = express.Router();
const isAdmin = require ('../middlewares/isAdmin');
const backofficeController = require('../controllers/backofficeController');
const { verifyToken } = require("../middlewares/authJWT");

router.get('/contacts', verifyToken, isAdmin, backofficeController.listContacts);

module.exports = router;