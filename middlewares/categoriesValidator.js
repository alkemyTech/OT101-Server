const { body } = require('express-validator');

const categoriesValidator = [
  body('name')
    .notEmpty()
    .isLength({ max: 255 })
    .withMessage('Enter a valid name'),
];

module.exports = { categoriesValidator };
