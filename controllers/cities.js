var cities = require('../models/cities');
// List of all Cities
exports.cities_list = function(req, res) {
res.send('NOT IMPLEMENTED: cities list');
};
// for a specific Cities.
exports.cities_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cities detail: ' + req.params.id);
};
// Handle Cities create on POST.
exports.cities_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cities create POST');
};
// Handle Costume delete on DELETE.
exports.cities_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await cities.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle Citiese update form on PUT.
exports.cities_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cities update PUT' + req.params.id);
};

// List of all cities
exports.cities_list = async function(req, res) {
    try{
    thecities = await cities.find();
    res.send(thecities);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.cities_view_all_Page = async function(req, res) {
    try{
    thecitiess = await cities.find();
    res.render('cities', { title: 'Cities Search Results', results: thecitiess });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
    
// Handle Cities create on POST.
exports.cities_create_post = async function(req, res) {
console.log(req.body)
let document = new cities();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.cityname = req.body.cityname;
document.citypopulation = req.body.citypopulation;
document.cityrevenue = req.body.cityrevenue;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

exports.cities_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await cities.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
       // res.send({"error": document for id ${req.params.id} not found);
    }
};

//New code for Assignment 12 for screenshot2
//Handle cities update form on PUT
exports.cities_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await cities.findById(req.params.id)
        // Do updates of properties
        if (req.body.cityname)
            toUpdate.cityname = req.body.cityname;
        if (req.body.citypopulation) toUpdate.citypopulation= req.body.citypopulation;
        if (req.body.cityrevenue) toUpdate.cityrevenue= req.body.cityrevenue;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle a show one view with id specified by query
exports.cities_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await cities.findById( req.query.id)
res.render('citiesdetail',
{ title: 'cities Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
