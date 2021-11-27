const { Entry } = require('../models');

module.exports = {
    index: function(req, res) {
        Entry.findAll({
            attributes: ['name', 'image', 'createdAt'],
            where: {
                type: 'news'
            }
        })
            .then(entries => res.json(entries))
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    },
    create: function(req, res, next) {
        const { name, content, categoryId } = req.body;
        const newEntry = {
            name,
            content,
            image: req.file.location,
            type: 'news',
            categoryId
        };

        Entry.create(newEntry)
            .then(createdEntry => {
                res.json(createdEntry);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    },
}