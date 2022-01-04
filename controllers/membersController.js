const { Members } = require('../models/members');
const db = require('../models')

module.exports = {
    listMembers: (req, res) => {
        db.Members.findAll({attributes: ['id', 'firstName', 'lastName', 'image']})
            .then((members) => res.json(members))
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
    try {
      const member = await Member.findByPk(req.params.id);
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
  delete: async (req, res) => {
    try {
      const member = await Member.findByPk(req.params.id);
      if (member) {
        await member.destroy();
        res.sendStatus(204);
      } else res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
