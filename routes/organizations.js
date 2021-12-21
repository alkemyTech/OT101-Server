var express = require("express")
var router = express.Router()
const organizationsController = require("../controllers/organizationsController")
/* GET home page. */
router.get("/:id/public", organizationsController.index)

module.exports = router
