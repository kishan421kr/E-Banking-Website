const { default: mongoose } = require("mongoose");
const customerModel = require("../model/customerModel");
const emailSend = require("../utils/SendEmail")
const generator = require('generate-password');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const registration=async(req , res)=>{
    const {firstName,laststName,Number,address,city,email} = req.body;

    const verifyEmail = await customerModel.findOne({Email:email})

    if(verifyEmail){
       return res.status(400).send({msg:"Email Already Registered"});
    }

    const password = generator.generate({
        length: 8,
        numbers: true
    });

    const accountNumber = await generator.generate({
        length: 12,
        numbers: true,
        lowercase: false,
        uppercase: false,
        symbols: false,
        excludeSimilarCharacters: true, // Avoids characters that look similar
    });

    
    const RandomIFSC = await generator.generate({
        length: 4,
        numbers: true,
        lowercase: false,
        uppercase: false,
        symbols: false,
        excludeSimilarCharacters: true,
    })

    const fixedIFSC = "EBK0";

    const IFSC = fixedIFSC + RandomIFSC;
    
       
    // console.log("password generated");
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)
       

    try {
            await customerModel.create({
            FirstName :firstName,
            LastName:laststName,
            Number:Number,
            Address:address,
            City:city,
            Email:email,
            Password:hashPassword,
            AccountNumber:accountNumber,
            IFSCnumber:IFSC
        })
    // console.log("data save in data base" );
    
        const mail = await emailSend(email,
            "E-Banking Password",

            `Hello, Welcome ${firstName} ${laststName}, 
            
            Thank you for choosing us. Your registered email is ${email}. 
            This is your password: **${password}**. 

            Please login using this password and change it whenever you want to.`
        )
        if(!mail){
            return res.status(500).send({ msg: "Failed to send email" });
        }
    
    // console.log("mail sended");

        res.send({msg:"User registered successfully, password sent to email"})
    } catch (error) {
        res.status(400).send("Server error")
    }
     
}





const Coustomerlogin = async(req,res)=>{
    const { email, password } = req.body;
    
    try {
        const logincheck = await customerModel.findOne({Email:email.toLowerCase()});
        // console.log(logincheck);
        if(!logincheck){
           return res.status(400).send({msg:"Invailid Email"});
        }

        const checkPassword = await bcrypt.compare(password,logincheck.Password);

        // console.log(checkPassword);

        if(!checkPassword){
           return res.status(400).send({msg:"Password does't match"});
        }

        const token = jwt.sign({id:logincheck._id},process.env.SECRET_KEY,{expiresIn:"2 days"})

        // console.log(token)

        res.status(200).send({name:logincheck.FirstName , email:logincheck.Email , customerid:logincheck._id , msg:"successfully login" , token:token})
    } catch (error) {
        res.status(400).send("Data Server Error")
    }
        
    
}

const Authentication=async(req, res)=>{
    const xtoken = req.header("x-token");
    // console.log(xtoken);
    // res.send("okk");
    try {
        const verify = await jwt.verify(xtoken, process.env.SECRET_KEY);
        res.status(200).send({success:true});
    } catch (error) {
        res.status(400).send({success:false});
    }
}

const ResetPassword=async(req,res)=>{
    const { customerid ,oldPassword,NewPassword,ReEnterPassword}=req.body;
    
    try {
        const data = await customerModel.findOne({_id:customerid});
        // console.log(data.Password)
        const checkPassword = await bcrypt.compare(oldPassword,data.Password);
        // console.log(checkPassword)
        if(!(checkPassword)){
            return res.status(400).send({msg:"old password does't match"})
        }

        if(!(NewPassword == ReEnterPassword) ){
            return res.status(400).send({msg:"both new password are not same please check"})
        }
        if (NewPassword.length < 6 || NewPassword.length > 12) {
            return res.status(400).send({ msg: "Length should be at least 6 and at most 12" });
        }
        // console.log("password checked")
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(NewPassword,salt);
        // console.log("password hashed");
        await customerModel.findByIdAndUpdate({_id:customerid},{Password:hashPassword})
        // res.status(200).send({msg:"Password change succesfully done!!"});

        const mail = await emailSend(data.Email,
            "E-Banking Password",

            `Hello, Welcome ${data.FirstName} ${data.LastName}.
             Your registered email is ${data.Email}. 
            This is your New password: **${NewPassword}**. 
    
            Thank you for choosing us.`
        )
        if(!mail){
            return res.status(500).send({ msg: "Failed to send email" });
        }
    
    // console.log("mail sended");

        res.status(200).send({msg:"Password change succesfully done!!"})

        
    } catch (error) {
        res.status(400).send({msg:"Data Server Error"})
    }
    

}

const Profile=async(req,res)=>{
    const {customerid} = req.body;
    try {
        const data =  await customerModel.findOne({_id:customerid}).select("-Password")
    // console.log(data);
    if (!data) {
        return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(data);
    } catch (error) {
        res.status(500).send({ msg: "Server error" });
    }
    
    
}

module.exports={
    registration,
    Coustomerlogin,
    Authentication,
    ResetPassword,
    Profile
}