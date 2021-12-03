const { User } = require('../models/index');
const bcrypt = require('bcrypt')

module.exports = {
    findOne: async (req, res ) => {
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
    }
}