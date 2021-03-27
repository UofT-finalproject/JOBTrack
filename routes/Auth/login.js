const express = require("express");
const login = express.Router();

//Passport file for login/register
const passport = require("../../Auth");

//Login passport authentication
login.post("/login", function (req, res) {
  passport.authenticate("local-login", function (error, user, info) {
    if (error) {
      return res.status(401).send(error);
    }

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(401).send(error);
      } else return res.json(user);
    });

    user.isAuthenticated = true;
  })(req, res);
});

module.exports = login;
