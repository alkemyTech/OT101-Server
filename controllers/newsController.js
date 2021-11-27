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
    }
}