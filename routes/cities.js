var express = require('express');
const cities_controlers= require('../controllers/cities');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


/* GET cities */
router.get('/', cities_controlers.cities_view_all_Page );
module.exports = router;
/* GET detail cities page */
router.get('/detail', cities_controlers.cities_view_one_Page);
/* GET create costume page */
router.get('/create',secured, cities_controlers.cities_create_Page);
/* GET create update page */
router.get('/update',secured, cities_controlers.cities_update_Page);
/* GET delete costume page */
router.get('/delete',secured, cities_controlers.cities_delete_Page);
