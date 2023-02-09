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

const addPrice = (price, property_type, square_footage, number_of_bedrooms, number_of_bathrooms) => {
  return database.query(`INSERT INTO prices
  (property_id, user_id, date, price, documentation, photo, property_type, square_footage, number_of_bedrooms, number_of_bathrooms)
                  VALUES (1, 1, '2023-02-02', $1, 'https://www2.gov.bc.ca/assets/gov/housing-and-tenancy/residential-tenancies/forms/rtb1_chrome.pdf', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvancouverforliving.com%2Ffurnished%2Fvancouver-apartments%2F&psig=AOvVaw1ysF0BbEEP4fkSz4PyvgIm&ust=1675718793700000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjqxY2p__wCFQAAAAAdAAAAABAE', $2, $3, $4, $5) RETURNING *`, [price, property_type, square_footage, number_of_bedrooms, number_of_bathrooms])
    .then((response) => {
      return response.rows[0]
    })
}

const deletePrice = (id) => {
  return database.query('DELETE FROM prices WHERE id = $1 RETURNING *', [id])
    .then((response) => {
      return response.rows[0]
  });
}

const approvePrice = (id) => {
  return database.query(`UPDATE prices SET admin_status = 'approved' WHERE id = $1 RETURNING *`, [id])
    .then((response) => {
      return response.rows[0]
    })
}

const rejectPrice = (id) => {
  return database.query(`UPDATE prices SET admin_status = 'rejected' WHERE id = $1 RETURNING *`, [id])
    .then((response) => {
      return response.rows[0]
    })
}

module.exports = { getPrices, getPriceById, addPrice, deletePrice, approvePrice, rejectPrice };