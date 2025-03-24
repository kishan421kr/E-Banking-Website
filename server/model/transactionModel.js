const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    coustomerId:{
        type:String,
        require:true
    },
    Amount:{
        type:Number,
        require:true
    },
    transactionType:{
        type:String,
        require:true
    }
    ,
    transactionAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("transaction" , transactionSchema)