const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/authJWT');
const testimonialsController = require('../controllers/testimonialsController');
const { s3multerUpload } = require('../services/aws');
const isAdmin = require('../middlewares/isAdmin');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');
const { testimonialsValidation } = require('../middlewares/testimonialsValidator');

router.post(
  '/',
  verifyToken,
  isAdmin,
  s3multerUpload.single('image'),
  testimonialsValidation,
  s3validationHandler,
  testimonialsController.create
);
router.patch('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), testimonialsController.update);
router.delete('/:id', verifyToken, isAdmin, testimonialsController.delete);
router.get('/', verifyToken, isAdmin, testimonialsController.listAll);
router.get('/backoffice', verifyToken, isAdmin, testimonialsController.listAll);
router.get('/last-elements', testimonialsController.lastElements);

module.exports = router;
