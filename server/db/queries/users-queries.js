const database = require('../connection');

const getUsers = () => {
  return database.query('SELECT * FROM users;')
    .then(users => {
      return users.rows;
    });
};

module.exports = { getUsers };