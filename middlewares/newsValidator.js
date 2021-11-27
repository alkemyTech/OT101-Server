const { body, validationResult } = require('express-validator')

const newsValidation = [
    body('name')
        .notEmpty()
        .withMessage('Enter a valid name')
        .isLength({ max: 255 }),    // CHECK: This should be equal to max size in model
    body('content')
        .notEmpty()
        .withMessage('Enter a valid content'),
    body('categoryId')
        .isNumeric()
        .withMessage('Enter a valid category ID')
        .toInt(),
];

const validationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    return res.status(422).json({
        errors: errors.array()
    });
};

module.exports = {
    newsValidation,
    validationHandler,
};