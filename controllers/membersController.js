const { Members } = require('../models/members');

module.exports = {
    list: (req, res) => {
        /* const members = await Member.findAll({
            attributes: ['firstName', 'lastName', 'image']
        });
        return res.json(members); */
        Members.findAll({attributes: ['firstName', 'lastName', 'image']})
            .then((entries) => res.json(entries))
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    },
    create: function (req,res) {
        Member.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            image: req.body.image
          }).then(member => res.json(member));
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const member = await Member.findByPk(id);
      if (member) {
        if (req.body.name) member.name = req.body.name;
        if (req.file?.location) member.image = req.file.location;

        await member.save();
        res.json(member);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
