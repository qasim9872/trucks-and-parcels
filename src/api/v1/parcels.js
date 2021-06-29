const Router = require('express-promise-router');

const router = new Router();

router.get('/', (req, res) => res.status(200).send('Parcels - OK'));

module.exports = router;
