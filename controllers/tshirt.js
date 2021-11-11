var Tshirt = require('../models/Tshirt'); 
 
// List of all Tshirts 
exports.Tshirt_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt list'); 
}; 
 
// for a specific Tshirt. 
exports.Tshirt_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt detail: ' + req.params.id); 
}; 
 
// Handle Tshirt create on POST. 
exports.Tshirt_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt create POST'); 
}; 
 
// Handle Tshirt delete form on DELETE. 
exports.Tshirt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt delete DELETE ' + req.params.id); 
}; 
 
// Handle Tshirt update form on PUT. 
exports.Tshirt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt update PUT' + req.params.id); 
}; 