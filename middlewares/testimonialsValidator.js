const { body } = require('express-validator');

const testimonialsValidation = [
  body('name').notEmpty().isLength({ max: 255 }).withMessage('Enter a valid name'),
  body('content').notEmpty().withMessage('Enter a valid content'),
];

module.exports = { testimonialsValidation };
