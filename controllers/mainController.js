const db = require('../models');

const controller = {
    storeContact: async (req, res) => {
        await db.Contacts.create({
            name: req.body.name,
            lastname: req.body.lastname,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.content,
            deleteAt: new Date()
        })
        return res.redirect('/');
    }
}

module.exports = controller;