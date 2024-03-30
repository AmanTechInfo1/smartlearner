const express = require('express')
const router = express.Router()
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validators")
const loginSchema = require("../validators/login-validators")
const validate = require("../middlewares/validate-middleware")


//define register page/////
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);







module.exports = router
