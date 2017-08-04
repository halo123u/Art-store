const db = require('../db/config');

const User = {};

User.findByUsername = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (first_name ,last_name,username,password ,phoneNumber)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.first_name, user.last_name, user.username, user.password ,user.phoneNumber]);
};
module.exports = User;