const express = require('express');
const router = express.Router();
const { s3 } = require('../services/aws');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');
const newsController = require('../controllers/newsController');
const { newsValidation, validationHandler } = require('../middlewares/newsValidator');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, uuidv4());
    },
  }),
});

router.get('/', newsController.index);
router.post('/', upload.single('image'), newsValidation, validationHandler, newsController.create);
router.delete('/:id', newsController.delete);

module.exports = router;
