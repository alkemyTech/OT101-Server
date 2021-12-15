const { Testimonial } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, content } = req.body;
    try {
      const testimonial = await Testimonial.create({ name, content, image: req.file.location });
      res.json(testimonial);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const testimonial = await Testimonial.findByPk(id);
      if (testimonial) {
        const { name, content } = req.body;

        if (name) testimonial.name = name;
        if (content) testimonial.content = content;
        if (req.file?.location) testimonial.image = reg.file.location;

        await testimonial.save();
        res.json(testimonial);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
