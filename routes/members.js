const express = require('express');
const router = express.Router();
const { membersValidation } = require('../middlewares/membersValidator');
const membersController = require('../controllers/membersController');
const { verifyToken } = require('../middlewares/authJWT');
const { s3multerUpload } = require('../services/aws');
const isAdmin = require('../middlewares/isAdmin');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');

router.get('/', verifyToken, isAdmin,membersController.listMembers);
router.post(
  '/',
  verifyToken,
  isAdmin,
  s3multerUpload.single('image'),
  membersValidation,
  s3validationHandler,
  membersController.create
);
router.patch('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), membersController.update);
router.delete('/:id', verifyToken, isAdmin, membersController.delete);

module.exports = router;
