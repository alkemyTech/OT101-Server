const { body } = require('express-validator');

const newsValidation = [
  body('name').notEmpty().withMessage('Enter a valid name').isLength({ max: 255 }), // CHECK: This should be equal to size in model
  body('content').notEmpty().withMessage('Enter a valid content'),
  body('categoryId').isNumeric().withMessage('Enter a valid category ID').toInt(),
];

module.exports = {
  newsValidation,
};
