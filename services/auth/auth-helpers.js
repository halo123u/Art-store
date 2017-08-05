const bcrypt = require('bcryptjs');
const User = require('../../models/user');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  console.log('logged in succesfully');
  if (req.user) return res.redirect('/');
  return next();
}

function loginRequired(req, res, next) {

  if (req.user === undefined) {
    console.log('you need to login');
    return res.redirect('/auth/login');
  }
  console.log(`your logged in as ${req.user.username}`);
  // res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
}