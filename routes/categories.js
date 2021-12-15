const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');

const router = express.Router();


/* GET categories listing. */
router.get('/', verifyToken, isAdmin, categoriesController.list);

module.exports = router;
