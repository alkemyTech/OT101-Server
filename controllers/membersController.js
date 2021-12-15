const { Member } = require('../models/members');

module.exports = {
    list: async (req, res) => {
        const members = await Member.findAll({
            attributes: ['firstName', 'lastName', 'image']
        });
        return res.json(members);
    },
    create: function (req,res) {
        Member.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image
          }).then(member => res.json(member));
    }
};

