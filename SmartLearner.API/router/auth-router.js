const express = require('express')
const router = express.Router()
const authControllers = require("../controllers/auth-controller");



//define register page/////
router.route("/register").post(authControllers.register);








module.exports = router
