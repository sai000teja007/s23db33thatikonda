var express = require('express');
const cities_controlers= require('../controllers/cities');
var router = express.Router();
/* GET cities */
router.get('/', cities_controlers.cities_view_all_Page );
module.exports = router;
/* GET detail cities page */
router.get('/detail', cities_controlers.cities_view_one_Page);