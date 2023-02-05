const database = require('../connection');

const getPrices = () => {
  return database.query('SELECT * FROM prices;')
    .then(prices => {
      return prices.rows;
    });
};

module.exports = { getPrices };