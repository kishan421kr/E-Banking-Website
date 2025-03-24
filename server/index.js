const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const coustRoutes= require("./route/coustomerRoutes");
const transactionRoute = require("./route/transactionRoutes");
const { default: mongoose } = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("DB connected");
})

app.use("/customer",coustRoutes)
app.use("/transaction",transactionRoute)

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`port running on ${port}`);
})