var express = require('express');
var router = express.Router();
const authController = require('../../controllers/authController');
const { body } = require('express-validator');
const { verifyToken } = require('../../middlewares/authJWT');

//bcrypt.js
const saltRounds = 10;

/* Register new user endpoint. */

const loginValidations = [
    // username must be an email
    body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
]
const registerValidations = [
    ...loginValidations,
    //validate name and last name
    body('firstName').isString(),
    body('lastName').isString(),
]


router.post('/register',
    registerValidations,
    authController.register
);


/* GET users listing. */
router.post('/login',
    loginValidations,
    authController.login
);

const { userAuthValidation, validationHandler } = require('../../middlewares/userAuthValidator');
const userAuthController = require('../../controllers/userAuthController');

router.post('/', userAuthValidation, validationHandler, userAuthController.findOne);

module.exports = router;
