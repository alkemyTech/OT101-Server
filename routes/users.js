var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const isAdmin = require('../middlewares/isAdmin')


/* GET users listing. */
router.get('/', isAdmin ,userController.listUsers);

module.exports = router;
