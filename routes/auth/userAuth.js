var express = require('express');
var router = express.Router();
const { verifyToken } = require('../../middlewares/authJWT');
const { userAuthValidation, registerValidation, validationHandler } = require('../../middlewares/userAuthValidator');
const userAuthController = require('../../controllers/userAuthController');

//bcrypt.js
const saltRounds = 10;

/* Register new user endpoint. */
router.post('/register',
    registerValidation,
    validationHandler,
    userAuthController.register
);


/* GET users listing. */
router.post('/login',
    userAuthValidation,
    validationHandler,
    userAuthController.findOne
);

module.exports = router;
