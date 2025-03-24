


const express = require("express");
const route = express.Router();
const transactionController = require("../controller/transactionController")

route.post("/depositCash",transactionController.DepositeCash);
route.post("/withdrawCash",transactionController.WithdrawCash);
route.post("/balanceInquiry",transactionController.BalanceInquiry);
route.post("/miniStatement",transactionController.MiniStatement)


module.exports = route; 
