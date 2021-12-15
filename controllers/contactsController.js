const { Contacts } = require('../models');

module.exports = {
    listUsers: async (req, res) => {
        let contacts = await Contacts.findAll()

        res.status(200).json(contacts)
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
