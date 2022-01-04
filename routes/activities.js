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
/* Add activities get list */
router.get('/', activitiesController.list);
router.get('/backoffice', verifyToken, isAdmin, activitiesController.all);
router.get('/:id', activitiesController.detail);

router.patch('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), activitiesController.update);
router.delete(
    '/:id',
    verifyToken,
    isAdmin,
    activitiesController.delete
);

module.exports = router;
