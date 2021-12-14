const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { verifyToken } = require('../middlewares/authJWT');
const isAdmin = require("../middlewares/isAdmin");

router.delete('/me', verifyToken, usersController.deleteAuthUser);
router.delete('/:id', verifyToken, isAdmin, usersController.delete);
router.patch('/me', verifyToken, usersController.editAuthUser)

module.exports = router;
