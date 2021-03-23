const express = require("express");
const redirectp = express.Router();

const authCheck = (req, res, next) => {
  if(!req.user){
      res.redirect('/login');
  } else {
      next();
  }
};

redirectp.get('/', authCheck, (req, res) => {
  res.render('You are logged in Sucessfuly!', { user: req.user });
});

// // auth logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
module.exports = redirectp;
