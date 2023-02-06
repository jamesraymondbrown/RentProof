const express = require('express');
const database = require('../db/connection');
const router = express.Router()

const propertyQueries = require('../db/queries/properties-queries')

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  propertyQueries.getPropertyById(req.params.id)
    .then((property) => {
      res.json(property)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  const province = req.body.province
  const city = req.body.city
  const street_address = req.body.street_address
  const postcode = req.body.postcode

  propertyQueries.addProperty(province, city, street_address, postcode)
    .then((response) => {
      console.log('Property Added:', response)
      res.send(response)
    })
    .catch((error) => {
      console.log(error)
    }); 
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  propertyQueries.deleteProperty(id)
    .then((response) => {
      console.log('Property Deleted:', response)
      res.send(response)
    })
    .catch((error) => {
      console.log(error)
    }); 
});

module.exports = router;
