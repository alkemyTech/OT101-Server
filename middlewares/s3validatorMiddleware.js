const { validationResult } = require('express-validator');
const { s3deleteFile } = require('../services/aws');

const s3validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  if (req.file) s3deleteFile(req.file.key).catch((err) => console.log(err));

  return res.status(422).json({
    errors: errors.array(),
  });
};

module.exports = s3validationHandler;
