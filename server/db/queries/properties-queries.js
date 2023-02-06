const database = require('../connection');

const getProperties = () => {
  return database.query('SELECT * FROM properties;')
    .then(properties => {
      return properties.rows;
    });
};

const getPropertyById = (id) => {
  return database.query('SELECT * FROM properties WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0]
    })
}

module.exports = { getProperties, getPropertyById };