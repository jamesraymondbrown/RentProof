const database = require('../connection');

const getUsers = () => {
  return database.query('SELECT * FROM users;')
    .then(users => {
      return users.rows;
    });
};

const getUserById = (id) => {
  return database.query('SELECT * FROM users WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0]
    })
}

module.exports = { getUsers, getUserById };