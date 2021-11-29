var express = require('express');
var router = express.Router();
const { User } = require('../../models/index');
const bcrypt = require('bcrypt')

const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.post('/',
// username must be an email
body('username').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 }),

async (req, res, next) => {

    const user = await User.findOne({ where: { email: req.body.username } });
    if (user === null) {
      res.json({ok: false});
    } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (result == true) {
                res.send(user);
            } else{
                res.json({ok: false});
            }
        });
    }


//   res.json({ok: false});
});

module.exports = router;
