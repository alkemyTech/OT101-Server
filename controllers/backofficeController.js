const db = requiere('../models');

const controller = {
    listContacts: async (req, res) => {
        const listContacts = await db.Contacts.findAll();
        return res.json(listContacts);
    }
}

module.exports = controller;