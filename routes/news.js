const express = require('express');
const router = express.Router();

const { s3multerUpload } = require('../services/aws');
const newsController = require('../controllers/newsController');
const { newsValidation, validationHandler } = require('../middlewares/newsValidator');

router.get('/', newsController.index);
router.post('/', s3multerUpload.single('image'), newsValidation, validationHandler, newsController.create);
router.get('/:id', newsController.details)
router.delete('/:id', newsController.delete);

module.exports = router;
