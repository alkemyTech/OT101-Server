var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const isAdmin = require('../middlewares/isAdmin')


/* GET users listing. */
router.get('/', isAdmin ,userController.listUsers);

//auth middlwware needs to be added to this route
router.route('/:id')
  .delete(usersController.delete)


module.exports = router;
