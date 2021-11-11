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
exports.Tshirt_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Tshirt();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.material = req.body.material; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Handle Tshirt delete form on DELETE. 
exports.Tshirt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt delete DELETE ' + req.params.id); 
}; 
 
// Handle Tshirt update form on PUT. 
exports.Tshirt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tshirt update PUT' + req.params.id); 
}; 