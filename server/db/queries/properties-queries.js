const database = require('../connection');

const getProperties = () => {
  return database.query('SELECT * FROM properties;')
    .then(properties => {
      return properties.rows;
    });
};

module.exports = { getProperties };