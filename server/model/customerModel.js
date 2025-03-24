const mongoose = require("mongoose");

const CoustomerSchema = new mongoose.Schema({
    FirstName : {
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    Number:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    City:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    Password:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("customer",CoustomerSchema)