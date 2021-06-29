const Router = require('express-promise-router');

const router = new Router();

router.get('/', (req, res) => res.status(200).send('Trucks - OK'));

module.exports = router;
