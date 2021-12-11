const { Contacts } = require('../models');

module.exports = {
  create: async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
      const contact = await Contacts.create({ name, email, phone, message });
      res.json(contact);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
