const express = require('express');
const router = express.Router()

const priceQueries = require('../db/queries/prices-queries')

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  priceQueries.getPriceById(req.params.id)
    .then((price) => {
      res.json(price)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;