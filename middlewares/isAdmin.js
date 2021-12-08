const { User, Role } = require('../models');

module.exports = async function isAdmin(req, res, next) {
  if (req.user) {
    const user = await User.findOne({ where: { id: req.user.id }, include: { model: Role, as: 'role' } });
    if (user && user.role?.name === 'Admin') return next();
  }
  res.sendStatus(401);
};
