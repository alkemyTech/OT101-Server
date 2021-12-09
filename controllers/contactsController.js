const { Contacts } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
      await Contacts.create({ name, email, phone, message });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
