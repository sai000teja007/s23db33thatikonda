var cities = require('../models/cities');
// List of all Costumes
exports.cities_list = function(req, res) {
res.send('NOT IMPLEMENTED: cities list');
};
// for a specific Costume.
exports.cities_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cities detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.cities_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cities create POST');
};
// Handle Costume delete form on DELETE.
exports.cities_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cities delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
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
    
// Handle Costume create on POST.
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
