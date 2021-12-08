const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();


/* GET categories listing. */
router.get('/', categoriesController.list);

module.exports = router;
