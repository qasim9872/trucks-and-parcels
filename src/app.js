const express = require('express');
const { urlencoded, json } = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');
const api = require('./api/v1');

const app = express();

app.use(
  morgan('combined', {
    format: 'default',
    skip: (req) => req.url.includes('healthcheck') // skip logs for health check endpoint
  })
);

app.use(urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(json()); // parse application/json

app.use(helmet());
app.use(cors());

app.use('/api/v1', api);

app.get('/healthcheck', (req, res) => res.sendStatus(200));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
