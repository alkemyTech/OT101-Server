const express = require('express');
const router = express.Router();
const New = require('../models/new');
const { s3 } = require('../services/aws');
const multer    = require('multer');
const multerS3  = require('multer-s3');
const { v4: uuidv4 } = require('uuid');

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, uuidv4())
    }
  }),
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const newObj = await New.findOne({ where: { id } });
    if (newObj) {
      await newObj.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const newsController = require('../controllers/newsController');
const { newsValidation, validationHandler } = require('../middlewares/newsValidator');

/* GET news listing. */
router.get('/', newsController.index);

/*
  POST news creation.
  form-data expected
*/
router.post(
  '/',
  upload.single('image'),
  newsValidation,
  validationHandler,
  newsController.create
);

module.exports = router;