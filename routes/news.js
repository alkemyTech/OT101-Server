const express = require('express');
const router = express.Router();

const { s3multerUpload } = require('../services/aws');
const newsController = require('../controllers/newsController');
const { newsValidation } = require('../middlewares/newsValidator');
const s3validationHandler = require('../middlewares/s3validatorMiddleware');
const { verifyToken } = require('../middlewares/authJWT');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', newsController.index);
router.get('/backoffice', newsController.all);
router.post('/', s3multerUpload.single('image'), newsValidation, s3validationHandler, newsController.create);
router.get('/:id', newsController.details);
router.delete('/:id', newsController.delete);
router.patch('/:id', verifyToken, isAdmin, s3multerUpload.single('image'), newsController.update);

module.exports = router;
