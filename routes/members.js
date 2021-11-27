var express = require('express');
var router = express.Router();

const { body, validationResult } = require('express-validator');

/* Post members. */
router.post('/',
// name must be a string
  body('name').isString(),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        {
            res.json('miembro ok')
    }

  },
);

module.exports = router;
