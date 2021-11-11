var Tshirt = require('../models/Tshirt'); 
 
// List of all Tshirt
exports.Tshirt_list = async function (req, res) {
    try {
        theTshirt = await Tshirt.find();
        res.send(theTshirt);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Tshirt_view_all_Page = async function (req, res) {
    try {
        theTshirt = await Tshirt.find();
        res.render('Tshirt', { title: 'Tshirt Search Results', results: theTshirt });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
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