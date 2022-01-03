var express = require("express")
var router = express.Router()
const organizationsController = require("../controllers/organizationsController")
const { s3multerUpload } = require('../services/aws');

/* GET home page. */
router.get("/:id/public", organizationsController.index)
router.put("/:id/public", s3multerUpload.fields([
    {  name: 'img1', maxCount: 1 },
    {  name: 'img2', maxCount: 1 },
    {  name: 'img3', maxCount: 1 },
]), organizationsController.update);

module.exports = router
