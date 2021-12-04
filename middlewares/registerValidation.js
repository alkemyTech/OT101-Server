const { body, validationResult } = require('express-validator');


const registerValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('name').isString(),
  body('lastName').isString(),
];

const validationHandler = (req, res, next) =>{ 
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(400).json({ errors: errors.array() });
};

module.exports = {
    registerValidation, validationHandler
} 