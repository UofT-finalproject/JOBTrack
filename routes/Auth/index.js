const express = require("express");
const Authentication = express.Router();

const Login = require("./login");
const Register = require("./register");
const Logout = require("./logout");
const Redirectp = require("./redirectp");

Authentication.use("", Login, Register, Logout, Redirectp);

module.exports = Authentication;
