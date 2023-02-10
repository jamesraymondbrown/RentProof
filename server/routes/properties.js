const express = require('express');
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

router.post('/find', (req, res) => {
  propertyQueries.getPropertyByAddress(req.body.street_address)
    .then((property) => {
      console.log(property)
      res.json(property)
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
  const latitude = req.body.latitude
  const longitude = req.body.longitude

  propertyQueries.addProperty(province, city, street_address, latitude, longitude)
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