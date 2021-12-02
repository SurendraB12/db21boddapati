var express = require('express');
const Tshirt_controlers = require('../controllers/Tshirt');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET costumes */
router.get('/', Tshirt_controlers.Tshirt_view_all_Page);

router.get('/detail', secured, Tshirt_controlers.Tshirt_view_one_Page);

// /* GET create costume page */
router.get('/create', secured, Tshirt_controlers.Tshirt_create_Page);

router.get('/update', secured, Tshirt_controlers.Tshirt_update_Page);

router.get('/delete', secured, Tshirt_controlers.Tshirt_delete_Page);
/* GET details with id of Tshirt page */
router.get('/Tshirt/:id', Tshirt_controlers.Tshirt_detail);
/* DELETE details with id of Tshirt page */
router.get('/Tshirt/:id', Tshirt_controlers.Tshirt_delete);

module.exports = router;