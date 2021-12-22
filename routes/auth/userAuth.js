var express = require('express');
var router = express.Router();
const { userAuthValidation, registerValidation } = require('../../middlewares/userAuthValidator');
const userAuthController = require('../../controllers/userAuthController');
const { verifyToken } = require('../../middlewares/authJWT');
const validationHandler = require('../../middlewares/validatorMiddleware');


/* Register new user endpoint. */
router.post('/register',
    registerValidation,
    validationHandler,
    userAuthController.register,
);


/* GET users listing. */
router.post('/login',
    userAuthValidation,
    validationHandler,
    userAuthController.findOne
);

router.get('/me',
    verifyToken,
    userAuthController.getUserData
);

module.exports = router;
