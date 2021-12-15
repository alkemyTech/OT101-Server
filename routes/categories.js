const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');
const { categoriesValidator } = require('../middlewares/categoriesValidator');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

const router = express.Router();


/* GET categories listing. */
router.get(
    '/', 
    verifyToken, 
    isAdmin, 
    categoriesController.list
);

router.post(
    '/',
    verifyToken, 
    isAdmin,
    categoriesValidator, 
    validatorMiddleware, 
    categoriesController.create
);

module.exports = router;
