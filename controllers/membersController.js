const { Member } = require('../models/members');

module.exports = {
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
