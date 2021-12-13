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
    const { name, content } = req.body;
    try {
      let testimonial = await Testimonial.findByPk(id);
      if (testimonial) {
        testimonial = await testimonial.update({
          name,
          content,
          image: req.file ? req.file.location : testimonial.image,
        });
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
