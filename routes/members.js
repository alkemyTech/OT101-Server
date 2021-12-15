const express = require('express');
const router = express.Router();

const { membersValidation, validationHandler } = require('../middlewares/membersValidator');
const membersController = require('../controllers/membersController');
const { verifyToken } = require('../middlewares/authJWT');
const { s3multerUpload } = require('../services/aws');
const isAdmin = require('../middlewares/isAdmin');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');

router.get('/', isAdmin, membersController.list);
router.post(
  '/',
  verifyToken,
  isAdmin,
  s3multerUpload.single('image'),
  membersValidation,
  s3validationHandler,
  membersController.create
);
router.put('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), membersController.update);

module.exports = router;
