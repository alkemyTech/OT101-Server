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
