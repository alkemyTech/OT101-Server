var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/contact', mainController.storeContact);

module.exports = router;
