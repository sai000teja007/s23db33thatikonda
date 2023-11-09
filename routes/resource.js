var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cities_controller = require('../controllers/cities');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/cities', cities_controller.cities_create_post);
// DELETE request to delete Costume.
router.delete('/cities/:id', cities_controller.cities_delete);
// PUT request to update Costume.
router.put('/cities/:id', cities_controller.cities_update_put);
// GET request for one Costume.
router.get('/cities/:id', cities_controller.cities_detail);
// GET request for list of all Costume items.
router.get('/cities', cities_controller.cities_list);
module.exports = router;