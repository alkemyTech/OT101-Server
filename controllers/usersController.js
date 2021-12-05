const { User } = require('../models');

module.exports = {
  delete: async (req, res) => {
    const {id} = req.params;
    if (!id) {
      res.status(400).send('Please provide a user id');
    }
    const user = await User.findOne({ where: { id } });
    console.log(user)
    if (!user) {
      console.log('User not found');
      res.status(404).send('User not found');
      return;
    }
    await user.destroy();
    res.status(200).send(user);
  }
}