
import { useState } from "react"
import DB_URL from "../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const WithdrawalCash=()=>{

    const [input , setInput] = useState("");

    const handelInput = (e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setInput(values=>({...values,[name]:value}))
        // console.log(input)
    }

    const handelSubmit=async(e)=>{
        e.preventDefault();

        try {
            const api = `${DB_URL}/transaction/withdrawCash`;
            const response = await axios.post(api , { customerid:localStorage.getItem("customerId"), ...input ,...{transactiontype:"debit"},...{gmail:localStorage.getItem("email")}})
            // console.log(response.data.msg);
            // alert(response.data.msg)
            toast.success(response.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
        
    }

    return(
        <>

        <div id="withdrawMainDiv">
                <div className="card">
                    <span className="title" id="dashHeading2">Withdraw Cash</span>
                    <form className="form">
                        <div className="group">
                        <input placeholder="" type="text" name="withdrawamount" onChange={handelInput}/>
                        <label for="name">Amount</label>
                        </div>
                    
                    <div className="group">
                        <textarea placeholder="" id="comment" name="commment" rows="5" onChange={handelInput}></textarea>
                        <label for="comment">Comment</label>
                    </div>
                        <button  onClick={handelSubmit}>Withdraw</button>
                    </form>
                    </div>
                    <ToastContainer position="top-right" autoClose={3000} />
        </div>
        
            

            
        </>
    )
}

export default WithdrawalCash