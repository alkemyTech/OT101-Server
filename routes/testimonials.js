const express = require('express');
const router = express.Router();

const testimonialsController = require('../controllers/newsController');

router.post(
  '/',
  verifyToken,
  isAdmin,
  /* s3multerUpload.single('image'), testimonialsValidation, s3validationHandler,*/
  testimonialsController.create
);
router.put('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), testimonialsController.update);

module.exports = router;
