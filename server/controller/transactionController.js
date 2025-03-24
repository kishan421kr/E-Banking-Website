const transactionModel = require("../model/transactionModel");
const emailSend = require("../utils/SendEmail")

const DepositeCash=async(req,res)=>{
    const{customerid,depositeamount,commment,transactiontype,gamil}=req.body;
    
    if(depositeamount<100 || depositeamount>50000){
        return res.status(400).send({msg:"Please Enter amount between 100 to 50000"})
    }

    try {
        const deposite = await transactionModel.create({
            coustomerId:customerid,
            Amount:depositeamount,
            transactionType:transactiontype
        })

        const mail = await emailSend(gamil,
                    "E-Banking Transaction",
        
                    `Your account has been ${transactiontype}ed with ${depositeamount}₹ .`
                )
                if(!mail){
                    return res.status(500).send({ msg: "Failed to send email" });
                }

        res.status(200).send({msg:"succesfully deposite"})
    } catch (error) {
        res.status(400).send({msg:"Server Error"})
    }

}

const WithdrawCash=async(req, res)=>{
    const{customerid,withdrawamount,commment,transactiontype,gmail}=req.body;
    
    if(withdrawamount<0 || withdrawamount>3000){
        return res.status(400).send({msg:"Transaction limit 30000"})
    }

    try {
        const deposite = await transactionModel.create({
            coustomerId:customerid,
            Amount:withdrawamount,
            transactionType:transactiontype
        })

        const mail = await emailSend(gmail,
            "E-Banking Transaction",

            `Your account has been ${transactiontype}ed with ${withdrawamount}₹ .`
        )
        if(!mail){
            return res.status(500).send({ msg: "Failed to send email" });
        }

        res.status(200).send({msg:"succesfully Withdrawal"})
    } catch (error) {
        res.status(400).send({msg:"Server Error"})
    }
}

const BalanceInquiry=async(req,res)=>{
    const { coustomerid} = req.body;
    
    
    const data = await transactionModel.find({coustomerId:coustomerid});
    // console.log(data)
    res.send(data);
}

const MiniStatement=async(req, res)=>{
    const { customerId }=req.body;
    
    const data = await transactionModel.find({coustomerId:customerId}).sort({transactionAt:-1}).limit(5);
    // console.log(data);
    res.send(data);
}





module.exports = { 
    DepositeCash,
    WithdrawCash,
    BalanceInquiry,
    MiniStatement
 
}