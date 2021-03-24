const express = require("express");
const logout = express.Router();


// auth logout
logout.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = logout;
