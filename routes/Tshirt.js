var express = require('express');
const Tshirt_controlers= require('../controllers/Tshirt');
var router = express.Router();

/* GET Tshirt */ 
router.get('/', Tshirt_controlers.Tshirt_view_all_Page );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Tshirt', { title: 'Search Results Tshirt' });
});

module.exports = router;