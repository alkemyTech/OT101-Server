const { User } = require('../models/user');

module.exports = {
  delete: (req, res) => {
    if (!req.params.id) {
      res.status(400).send('Please provide a user id');
    }
    User.findOne(req.params.id, (err, user) => {
      if (err) {
        res.status(400).send(err);
      }
      res.status(200).send(user)
    })
  }
}