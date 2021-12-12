const { body } = require('express-validator');

const userAuthValidation = [
    body('username').isEmail(),

    body('password').isLength({ min: 5 }),

];

const registerValidation = [
    ...userAuthValidation,
    //validate name and last name
    body('firstName').isString(),
    body('lastName').isString(),
]

module.exports = { userAuthValidation , registerValidation };
