var express = require('express');
var router = express.Router();
const { User } = require('../models/index');
const { body, validationResult } = require('express-validator');

//bcrypt.js

const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Register new user endpoint. */

router.post('/',
// username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  //validate name and last name
  body('firstName').isString(),
  body('lastName').isString(),

  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);

    //Encript password

    const password = req.body.password;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      email: req.body.username,
      password: hashPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).then(user => res.json(user));
  },
);

module.exports = router;
