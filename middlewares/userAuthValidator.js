const { body } = require('express-validator');

const userAuthValidation = [
    body('email').isEmail(),

    body('password').isLength({ min: 5 }),

];

const registerValidation = [
    ...userAuthValidation,
    //validate name and last name
    body('name').isString(),
    body('lastName').isString(),
]

module.exports = { userAuthValidation , registerValidation };
