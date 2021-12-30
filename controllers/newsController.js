const { Entry } = require('../models');

module.exports = {
  lastElements: async (req, res) => {
    try {
      const news = await Entry.findAll({
        attributes: ['id', 'name', 'image', 'createdAt', 'updatedAt'],
        order: [ [ 'id', 'DESC' ]],
        limit: 3
      })
        res.json(news);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
  },
  all: async (req, res) => {
    try {
      const news = await Entry.findAll({
        attributes: ['id', 'name', 'image', 'type', 'categoryId', 'createdAt', 'updatedAt'],
      })
        res.json(news);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
  },
  create: function (req, res, next) {
    const { name, content, categoryId } = req.body;
    const newEntry = {
      name,
      content,
      image: req.file.location,
      type: 'news',
      categoryId,
    };

    Entry.create(newEntry)
      .then((createdEntry) => {
        res.json(createdEntry);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  details: (req, res) => {
    const { id } = req.params;
    Entry.findByPk(id)
      .then((newsDetails) => {
        if (newsDetails) {
          res.json(newsDetails);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const entry = await Entry.findOne({ where: { id } });
      if (entry) {
        await entry.destroy();
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;

    try {
      const existingEntry = await Entry.findByPk(id);

      if (!existingEntry) {
        return res.status(404).json({
          error: 'Entry not found',
        });
      }

      const { name, type, categoryId } = req.body;

      if (name) existingEntry.name = name;
      if (type) existingEntry.type = type;
      if (categoryId) existingEntry.categoryId = categoryId;
      if (req.file?.location) existingEntry.image = req.file.location;

      await existingEntry.save();

      res.status(200).json(existingEntry);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
