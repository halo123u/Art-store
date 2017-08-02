const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (first_name ,last_name,username,password ,phoneNumber
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.first, user.last, user.username, user.password ,user.phoneNumber]);
};

// User.findUser= id => {
//   return db.manyOrNone(`
//    select * from placestogo;
//   `, [id]);
// };

module.exports = User;