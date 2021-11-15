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
 
// for a specific tshirt.
exports.Tshirt_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Tshirt.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Tshirt create on POST. 
exports.Tshirt_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Tshirt();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tshirt_type":"goat", "cost":12, "size":"large"}
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
exports.Tshirt_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Tshirt.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Tshirt_type)  
               toUpdate.Tshirt_type = req.body.Tshirt_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 