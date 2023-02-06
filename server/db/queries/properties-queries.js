const database = require('../connection');

const getProperties = () => {
  return database.query('SELECT * FROM properties ORDER BY id DESC;')
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

const addProperty = (province, city, street_address, postcode) => {
  return database.query(`INSERT INTO properties (province, city, street_address, postcode)
                  VALUES ($1, $2, $3, $4) RETURNING *`, [province, city, street_address, postcode])
    .then((response) => {
      return response.rows[0]
    })
}

const deleteProperty = (id) => {
  return database.query('DELETE FROM properties WHERE id = $1 RETURNING *', [id])
    .then((response) => {
      return response.rows[0]
  });
}
 
module.exports = { getProperties, getPropertyById, addProperty, deleteProperty };