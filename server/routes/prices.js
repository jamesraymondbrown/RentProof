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

router.post('/', (req, res) => {
  const price = req.body.price
  const property_type = req.body.property_type
  const square_footage = req.body.square_footage
  const number_of_bedrooms = req.body.number_of_bedrooms
  const number_of_bathrooms = req.body.number_of_bathrooms

  priceQueries.addPrice(price, property_type, square_footage, number_of_bedrooms, number_of_bathrooms)
    .then((response) => {
      console.log('Price Added:', response)
      res.send(response)
    })
    .catch((error) => {
      console.log(error)
    }); 
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  priceQueries.deletePrice(id)
    .then((response) => {
      console.log('Price Deleted:', response)
      res.send(response)
    })
    .catch((error) => {
      console.log(error)
    }); 
});

router.put('/:id', (req, res) => {
  // const id = req.params.id
  // propertyQueries.deleteProperty(id)
  //   .then((response) => {
  //     console.log('Property Deleted:', response)
  //     res.send(response)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   }); 
});

module.exports = router;