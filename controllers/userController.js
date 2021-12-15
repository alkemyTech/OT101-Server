const { User } = require('../models');

module.exports = {
    listUsers: async (req, res) => {
        let users = await User.findAll()

        res.status(200).json(users)
    },
    delete: async (req, res) => {
    const {id} = req.params;
    if (!id) {
      res.status(400).send('Please provide a user id');
    }
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    await user.destroy();
    res.status(200).send(user);
  }
};
