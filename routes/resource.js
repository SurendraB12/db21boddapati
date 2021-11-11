var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Tshirt_controller = require('../controllers/Tshirt');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Tshirt ROUTES ///
// POST request for creating a Tshirt.
router.post('/Tshirt', Tshirt_controller.Tshirt_create_post);
// DELETE request to delete Tshirt.
router.delete('/Tshirt/:id', Tshirt_controller.Tshirt_delete);
// PUT request to update Tshirt.
router.put('/Tshirt/:id', Tshirt_controller.Tshirt_update_put);
// GET request for one Tshirt.
router.get('/Tshirt/:id', Tshirt_controller.Tshirt_detail);
// GET request for list of all Tshirt items.
router.get('/Tshirt', Tshirt_controller.Tshirt_list);
module.exports = router;