const { Testimonial } = require('../models');

module.exports = {
  create: (req, res) => {
    //TODO: 84
  },
  update: (req, res) => {
    const { id } = req.id;
    const { name, content, image } = req.body;
    try {
      let testimonial = await Testimonial.findByPk(id);
      if (testimonial) {
        testimonial = await testimonial.update({
          name,
          content,
          image: (req.file ? req.file.location : image) || testimonial.image,
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
