const db = requiere('../models');

const controller = {
    listContacts: async (req, res) => {
        const ContactsList = await db.Contacts.findAll();
        return res.json(ContactsList);
    }
}

module.exports = controller;