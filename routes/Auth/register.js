const express = require("express");
const register = express.Router();

//Passport file for login/register
const passport = require("../../Auth");

//Register passport authentication
register.post("/register", (req, res) => {
  passport.authenticate("local-register", function (error, user, info) {
    if (error) {
      return res.status(401).send(error);
    }
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(401).json(error);
      } else return res.json(user);
    });
  })(req, res);
});

module.exports = register;
