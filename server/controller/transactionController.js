const transactionModel = require("../model/transactionModel");
const emailSend = require("../utils/SendEmail")

const DepositeCash=async(req,res)=>{
    const{customerid,depositeamount,transactiontype,gamil}=req.body;
    
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
    
    if(withdrawamount<0 || withdrawamount>30000){
        return res.status(400).send({msg:"Transaction limit 30000"})
    }

    const data = await transactionModel.find({coustomerId:customerid});
    // console.log(data)
    let debitAmount=0;
    let creditAmount=0;
    let netBalance=0;

    data.map((key)=>{
        if(key.transactionType == 'credit'){
            creditAmount+=key.Amount;
        }
        if(key.transactionType== 'debit'){
            debitAmount+=key.Amount;
        }
    })

     netBalance = creditAmount - debitAmount;
    
     if (withdrawamount > netBalance) {
        return res.status(400).json({ msg: "Insufficient balance!" });
    }

    try {
        const deposite = await transactionModel.create({
            coustomerId:customerid,
            Amount:withdrawamount,
            transactionType:transactiontype,
            Comment:commment
        })
        if(!deposite){
            return res.status(500).send({msg:"Transection failed"})
        }

        const mail = await emailSend(gmail,
            "E-Banking Transaction",

            `Your account has been ${transactiontype}ed with ${withdrawamount}₹ .
            Reason : ${commment ? commment : "Withdraw Cash"}`
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