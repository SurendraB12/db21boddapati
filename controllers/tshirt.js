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
exports.Tshirt_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Tshirt.findById(req.params.id)
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
exports.Tshirt_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Tshirt.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle Tshirt update form on PUT. 
exports.Tshirt_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Tshirt.findById(req.params.id)
        // Do updates of properties 
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.material) toUpdate.material = req.body.material;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};



exports.Tshirt_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Tshirt.findById(req.query.id)
        res.render('Tshirtdetail',
            { title: 'Tshirt Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Tshirt_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Tshirtcreate', { title: 'Tshirt Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for updating a costume. 
// query provides the id 
exports.Tshirt_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Tshirt.findById(req.query.id)
        res.render('Tshirtupdate', { title: 'Tshirt Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.Tshirt_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Tshirt.findById(req.query.id)
        res.render('Tshirtdelete', {
            title: 'Tshirt Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};