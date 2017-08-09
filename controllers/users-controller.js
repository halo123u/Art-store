const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.index = (req,res)=>{
    User.findByUsername(req.body.username).then(data=>{
      res.json(data);
    }).catch(err=>{
      console.log(err)
      res.status(500).json(err);
    })
}
  usersController.account = (req,res)=>{
     User.findByUsername(req.user.username).then(data=>{
        res.render('auth/account',
        {
          data:data
        });
    }).catch(err=>{
      console.log(err)
      res.status(500).json(err);
    })
  }

usersController.create = (req, res)=>{
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
first_name :req.body.first,
last_name: req.body.last,
username: req.body.username,
password : hash,
phoneNumber  : req.body.phone
  }).then(function(user){
    req.login(user, function(err){
      if (err) return next(err);
      res.redirect('/');
    });
  }).catch(function(err){
    console.log(err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;