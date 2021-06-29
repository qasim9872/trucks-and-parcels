const Router = require('express-promise-router');
const { trucks } = require('../../database');

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).send('Trucks - Get All Trucks');
});

router.post('/', (req, res) => {
  res.status(201).send('Trucks - Create new Truck');
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .send(`Trucks - Get Truck with id: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .send(`Trucks - Delete Truck with id: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .send(`Trucks - Update Truck with id: ${req.params.id}`);
});

module.exports = router;
