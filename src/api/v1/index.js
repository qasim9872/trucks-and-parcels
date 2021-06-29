const Router = require('express-promise-router');
const trucks = require('./trucks');
const parcels = require('./parcels');

const router = new Router();
router.use('/trucks', trucks);
router.use('/parcels', parcels);

module.exports = router;
