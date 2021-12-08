const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
})

//auth middlwware needs to be added to this route
router.route('/:id')
  .delete(usersController.delete)

module.exports = router;
