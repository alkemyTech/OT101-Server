const { body, validationResult } = require('express-validator');

const userAuthValidation = [
body('username').isEmail(),

body('password').isLength({ min: 5 }),

];

const validationHandler = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
        return res.status(400).json({
            errors: errors.array()
        });
};

module.exports = { userAuthValidation, validationHandler };
