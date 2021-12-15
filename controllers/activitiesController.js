const { Activity } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, content } = req.body;
    try {
      const activity = await Activity.create({ name, content, image: req.file.location });
      res.json(activity);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, content } = req.body;
    try {
      let activity = await Activity.findByPk(id);
      if (activity) {
        const values = {};

        if (name) values.name = name;
        if (content) values.content = content;
        if (req.file?.location) values.image = req.file.location;

        activity = await activity.update(values);
        res.json(activity);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
