var express = require('express');
var router = express.Router();
const { Member } = require('../models/members.js');

const { body, validationResult } = require('express-validator');

/* Post members. */
router.post('/',
// name must be a string
  body('name').isString(),
  (req, res) => {

    // Finds the validation errors in this request and wraps them in an object

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        {

            Member.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              image: req.body.image
            }).then(member => res.json(member));

    }

  },
);

module.exports = router;
