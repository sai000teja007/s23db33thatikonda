var express = require('express');
const cities_controlers= require('../controllers/cities');
var router = express.Router();
/* GET cities */
router.get('/', cities_controlers.cities_view_all_Page );
module.exports = router;
/* GET detail cities page */
router.get('/detail', cities_controlers.cities_view_one_Page);
/* GET create costume page */
router.get('/create', cities_controlers.cities_create_Page);
/* GET create update page */
router.get('/update', cities_controlers.cities_update_Page);
/* GET delete costume page */
router.get('/delete', cities_controlers.cities_delete_Page);
