const { Category } = require('../models');

module.exports = {
    list: async (req, res) => {
        try {
            const entries = await Category.findAll({attributes: ['id', 'name', 'description']});

            res.json(entries);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        };
    },
    create: async (req, res) => {
        const { name, description } = req.body;

        try {
            const newCategory = await Category.create({
                name: name,
                description: description,
             });

            res.json(newCategory);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        };
    },
    update: async (req, res) => {
        const { name, description } = req.body;

        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                return res.sendStatus(404);                    
            }

            if (name) category.name = name;
            if (description) category.description = description;

            await category.save();

            res.status(200).json(category);
        } catch (err) {
            console.log(err);

            // category name is already taken
            if (err.name === "SequelizeUniqueConstraintError" ) {
                return res.sendStatus(400);
            }

            res.sendStatus(500);
        };
    }
};