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

const validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  return res.status(400).json({
    errors: errors.array()
  });
};

module.exports = { activitiesValidator, validationHandler }