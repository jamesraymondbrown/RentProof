require('dotenv').config();

const express = require('express');
const app = express()
const PORT = process.env.PORT || 8001;

const morgan = require('morgan');
app.use(morgan('dev'));

const userQueries = require('./db/queries/users-queries');
const propertyQueries = require('./db/queries/properties-queries');
const priceQueries = require('./db/queries/prices-queries');

app.get('/users', (req, res) => {
  userQueries.getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.get('/properties', (req, res) => {
   propertyQueries.getProperties()
    .then((properties) => {
      res.json(properties)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.get('/prices', (req, res) => {
   priceQueries.getPrices()
    .then((prices) => {
      res.json(prices)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
