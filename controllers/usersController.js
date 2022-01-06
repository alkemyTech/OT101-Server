const { User, Role } = require('../models');

module.exports = {
  delete: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        res.sendStatus(204);
      } else res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  deleteAuthUser: async (req, res) => {
    try {
      await User.destroy({ where: { id: req.user.id } });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  edit: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt', 'deletedAt'],
        },
        include: [{ model: Role, as: 'role' }],
      });

      if (user) {
        const { firstName, lastName, roleId, email } = req.body;
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (roleId) user.roleId = roleId;
        if (req.file?.location) user.image = req.file.location;

        await user.save();
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  editAuthUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.user.id, {
        attributes: {
          exclude: [
            'password',
            'createdAt',
            'updatedAt',
            'deletedAt',
            'roleId',
          ],
        },
        include: [{ model: Role, as: 'role' }],
      });

      if (user) {
        const { firstName, lastName, email } = req.body;
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;
        if (req.file?.location) user.image = req.file.location;

        await user.save();
        res.json(user);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  list: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
      });
      res.json(users);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
