const { Contacts } = require('../models');

module.exports = {
  list: async (req, res) => {
    try {
      const contacts = await Contacts.findAll({attributes: ['id', 'name', 'lastname', 'phone', 'email', 'message', 'deleteAt']});
      res.json(contacts);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
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
