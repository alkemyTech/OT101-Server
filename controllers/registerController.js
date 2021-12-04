const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    create: async function (req,res) {
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        User.create({
            email: req.body.username,
            password: hashPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName
          }).then(user => res.json(user));
    }
};