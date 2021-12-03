const { User } = require('../models/index');
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');


//bcrypt.js
const saltRounds = 10;

module.exports = {
  register: async (req, res) => {
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

  login: async (req, res, next) => {

    const user = await User.findOne({ where: { email: req.body.username } });
    if (user === null) {
      res.json({ ok: false });
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result == true) {
          res.send(user);
        } else {
          res.json({ ok: false });
        }
      });
    }

    //   res.json({ok: false});
  }
}