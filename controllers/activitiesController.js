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
      let activity = await Activity.findOne({ where: { id } });
      if (activity) {
        activity = await activity.update({
          name,
          content,
          image: req.file ? req.file.location : activity.image,
        });
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
