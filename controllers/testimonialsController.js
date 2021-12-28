const { Testimonial } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, content } = req.body;
    try {
      const testimonial = await Testimonial.create({
        name,
        content,
        image: req.file.location,
      });
      res.json(testimonial);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  update: async (req, res) => {
    try {
      const testimonial = await Testimonial.findByPk(req.params.id);
      if (testimonial) {
        const { name, content } = req.body;

        if (name) testimonial.name = name;
        if (content) testimonial.content = content;
        if (req.file?.location) testimonial.image = req.file.location;

        await testimonial.save();
        res.json(testimonial);
      } else res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  delete: async (req, res) => {
    try {
      const testimonial = await Testimonial.findByPk(req.params.id);
      if (testimonial) {
        await testimonial.destroy();
        res.sendStatus(204);
      } else res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  listAll: async (req, res) => {
    try {
      const testimonials = await Testimonial.findAll({
        attributes: ['id', 'name', 'content', 'image', 'createdAt', 'updatedAt']
      })
      res.json(testimonials);
    }
    catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
};
