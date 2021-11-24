const express = require('express');
const router = express.Router();
const New = require('../models/new'); //Puede cambiar el nombre del model

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const newObj = await New.findOne({ where: { id } });
  if (newObj) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
