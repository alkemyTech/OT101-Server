const { Activity } = require('../models/index');

module.exports = {
  create: async (req, res) => {
    const { name, content } = req.body;
    try {
      const activity = await Activity.create({ name, content });
      res.json(activity);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
