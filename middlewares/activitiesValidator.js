const { body } = require("express-validator");

const activitiesValidator = [
  body('name')
    .notEmpty()
    .isLength({ max: 255 })
    .withMessage('Enter a valid name'),
  body('content')
    .notEmpty()
    .withMessage('Enter a valid content'),
]

module.exports = { activitiesValidator }