const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');

router.put('/:id', verifyToken, isAdmin, activitiesController.update);
