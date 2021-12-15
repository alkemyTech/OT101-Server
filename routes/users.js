var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require("../middlewares/authJWT");
const isAdmin = require('../middlewares/isAdmin')


/* GET users listing. */
router.get('/', verifyToken, isAdmin, userController.listUsers);

//auth middlwware needs to be added to this route
router.delete('/:id', userController.delete)

module.exports = router;
