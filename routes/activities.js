const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');

router.post('/', activitiesController.create);

module.exports = router;
