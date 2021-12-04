const { Contacts } = require('../models');

module.exports = {
    listUsers: async (req, res) => {
        let contacts = await Contacts.findAll()

        res.status(200).json(contacts)
    }
};
