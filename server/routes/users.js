const express = require('express');
const router = express.Router()

const userQueries = require('../db/queries/users-queries')

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  userQueries.getUserById(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;