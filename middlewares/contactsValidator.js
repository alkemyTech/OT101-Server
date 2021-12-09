const { body } = require('express-validator');

const contactsValidator = [
  body('name').notEmpty().isLength({ max: 255 }).withMessage('Enter a valid name'),
  body('lastname').notEmpty().isLength({ max: 255 }).withMessage('Enter a valid last name'),
  body('email').isEmail().withMessage('Enter a valid email'),
  body('message').notEmpty().isLength({ min: 5, max: 500 }).withMessage('Enter a valid message'),
];

module.exports = { contactsValidator };
