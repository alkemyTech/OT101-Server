const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesController');
const isAdmin = require('../middlewares/isAdmin');
const { verifyToken } = require('../middlewares/authJWT');
const { s3multerUpload } = require('../services/aws');

const { activitiesValidator } = require('../middlewares/activitiesValidator');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');

router.post(
  '/',
  verifyToken,
  isAdmin,
  s3multerUpload.single('image'),
  activitiesValidator,
  s3validationHandler,
  activitiesController.create
);

router.post('/:id/image', verifyToken, isAdmin, s3multerUpload.single('image'), activitiesController.updateImage);

router.patch('/:id', verifyToken, isAdmin, activitiesController.update);

module.exports = router;
