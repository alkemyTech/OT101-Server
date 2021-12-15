const { User } = require('../models');

module.exports = {
    listUsers: async (req, res) => {
        let users = await User.findAll()

        res.status(200).json(users)
    }
};
