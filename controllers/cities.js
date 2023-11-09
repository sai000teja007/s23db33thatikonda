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