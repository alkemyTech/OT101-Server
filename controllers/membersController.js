const { Member } = require('../models/members');

module.exports = {
  list: async (req, res) => {
      const members = await Member.findAll({
          attributes: ['firstName', 'lastName', 'image']
      });
      return res.json(members);
  },
  create: (req, res) => {
    Member.create({
      name: req.body.name,
      image: req.file.location,
    })
      .then((member) => res.json(member))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      let member = await Member.findByPk(id);
      if (member) {
        member = await Member.update({
          name: req.body.name,
          image: req.file ? req.file.location : member.image,
        });
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
