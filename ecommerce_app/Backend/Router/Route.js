const { Router } = require('express');
const { Home } = require("../Controllers/Home");
const Login = require("../Controllers/Login");
const Register = require("../Controllers/Register");

let router = Router();
router.route("/home").get(Home);
router.route("/login").get(Login);
router.route("/register").get(Register);

module.exports = router;
