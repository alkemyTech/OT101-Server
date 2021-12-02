const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const { activitiesValidator, validationHandler } = require('../middlewares/activitiesValidator');

router.post('/', activitiesValidator, validationHandler, activitiesController.create);

module.exports = router;
