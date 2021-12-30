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
    try {
      const activity = await Activity.findByPk(id);
      if (activity) {
        const { name, content } = req.body;

        if (name) activity.name = name;
        if (content) activity.content = content;
        if (req.file?.location) activity.image = req.file.location;

        await activity.save();
        res.json(activity);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  list: async (req, res) => {
    try {
      const activities = await Activity.findAll({ 
        attributes: ['id', 'name', 'image'],
        order: [ [ 'id', 'DESC' ]],
        limit: 6
      });
      res.json(activities);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  all: async (req, res) => {
    try {
      const activities = await Activity.findAll({ 
        attributes: ['id', 'name', 'image', 'content', 'createdAt', 'updatedAt'],
      });
      res.json(activities);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  detail: async (req, res) => {
    try {
      const activity = await Activity.findByPk(req.params.id)
      res.json(activity);
    }
    catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  delete: async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (activity) {
            await activity.destroy();
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    };
  }
};
