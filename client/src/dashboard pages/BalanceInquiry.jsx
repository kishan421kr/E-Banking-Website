import axios from "axios"
import { useEffect, useState } from "react"
import DB_URL from "../config";



const BalanceInquiry=()=>{

    const [amount , setAmount ] = useState([]);

    const loadData = async()=>{
    const api = `${DB_URL}/transaction/balanceInquiry`;
    const response = await axios.post(api,{coustomerid:localStorage.getItem("customerId")});
    // console.log(response.data);
    setAmount(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    let debitAmount=0;
    let creditAmount=0;
    let netBalance=0;

    amount.map((key)=>{
        if(key.transactionType == 'credit'){
            creditAmount+=key.Amount;
        }
        if(key.transactionType== 'debit'){
            debitAmount+=key.Amount;
        }
    })

     netBalance = creditAmount - debitAmount;
    
    return(
        <>  
        <div id="balanceMainDiv">

            <h2 id="dashHeading2">Balance inquiry</h2>

            <div>
                ₹ NetBalance : {netBalance} 
            </div>
        </div>
            
        </>
    )
}

export default BalanceInquiry