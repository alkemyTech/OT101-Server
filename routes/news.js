const express = require('express');
const router = express.Router();

const { s3multerUpload } = require('../services/aws');
const newsController = require('../controllers/newsController');
const { newsValidation } = require('../middlewares/newsValidator');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');

router.get('/', newsController.index);
router.post('/', s3multerUpload.single('image'), newsValidation, s3validationHandler, newsController.create);
router.get('/:id', newsController.details)
router.delete('/:id', newsController.delete);

module.exports = router;
