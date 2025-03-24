const express = require("express");
const route = express.Router();
const customerController = require("../controller/customerController")

route.post("/registration",customerController.registration);
route.post("/login",customerController.Coustomerlogin);
route.post("/authentication",customerController.Authentication)
route.post("/resetPassword",customerController.ResetPassword)

module.exports = route; 
