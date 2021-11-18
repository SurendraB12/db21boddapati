var express = require('express');
const Tshirt_controlers = require('../controllers/Tshirt');
var router = express.Router();

/* GET costumes */
router.get('/', Tshirt_controlers.Tshirt_view_all_Page);

router.get('/detail', Tshirt_controlers.Tshirt_view_one_Page);

// /* GET create costume page */
router.get('/create', Tshirt_controlers.Tshirt_create_Page);


router.get('/update', Tshirt_controlers.Tshirt_update_Page); 

router.get('/delete', Tshirt_controlers.Tshirt_delete_Page); 

module.exports = router;