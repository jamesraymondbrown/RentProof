const database = require("../connection");

const getPrices = () => {
  return database.query("SELECT * FROM prices;").then((prices) => {
    return prices.rows;
  });
};

const getPriceById = (id) => {
  return database
    .query("SELECT * FROM prices WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

const addPrice = (
  property,
  user,
  price,
  document,
  photo,
  property_type,
  square_footage,
  number_of_bedrooms,
  number_of_bathrooms
) => {
  return database
    .query(
      `INSERT INTO prices
          (property_id, user_id, date, price, documentation, photo, property_type, square_footage,
          number_of_bedrooms, number_of_bathrooms)
                          VALUES
          ($1, $2, CURRENT_TIMESTAMP, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        property,
        user,
        price,
        document,
        photo,
        property_type,
        square_footage,
        number_of_bedrooms,
        number_of_bathrooms,
      ]
    )
    .then((response) => {
      return response.rows[0];
    });
};

const deletePrice = (id) => {
  return database
    .query("DELETE FROM prices WHERE id = $1 RETURNING *", [id])
    .then((response) => {
      return response.rows[0];
    });
};

const approvePrice = (id) => {
  return database
    .query(
      `UPDATE prices SET admin_status = 'approved' WHERE id = $1 RETURNING *`,
      [id]
    )
    .then((response) => {
      return response.rows[0];
    });
};

const rejectPrice = (id) => {
  return database
    .query(
      `UPDATE prices SET admin_status = 'rejected' WHERE id = $1 RETURNING *`,
      [id]
    )
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getPrices,
  getPriceById,
  addPrice,
  deletePrice,
  approvePrice,
  rejectPrice,
};
