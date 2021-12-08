const { Category } = require('../models');

module.exports = {
    list: (req, res) => {
        Category.findAll({attributes: ['name']})
            .then((entries) => res.json(entries))
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    },
};