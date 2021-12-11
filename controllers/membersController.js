const { Member } = require('../models/members');

module.exports = {
    create: function (req,res) {
        Member.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image
          }).then(member => res.json(member));
    }
};

