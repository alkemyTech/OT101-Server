const { User } = require('../models');

module.exports = {
  delete: async (req, res) => {
    const { id } = req.params;
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
  },

  deleteAuthUser: async (req, res) => {
    await User.destroy({ where: { id: req.user.id } });
    res.sendStatus(204);
  },

  edit: async (req, res) => {},

  editAuthUser: async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt', 'roleId'] },
      include: [{ model: Role, as: 'role' }],
    });

    //TODO
    return await user.save();
  },
};
