const database = require('../connection');

const getPrices = () => {
  return database.query('SELECT * FROM prices;')
    .then(prices => {
      return prices.rows;
    });
};

const getPriceById = (id) => {
  return database.query('SELECT * FROM prices WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0]
    })
}

module.exports = { getPrices, getPriceById };