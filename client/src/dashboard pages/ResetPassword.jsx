import { useState } from "react"
import DB_URL from "../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ResetPassword=()=>{

    const [input , setInput] = useState({});

    const handelInput=(e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handelSubmit = async(e)=>{

        e.preventDefault();        
        
        try {
            const api = `${DB_URL}/customer/resetPassword`;
            let response = await axios.post(api , {customerid:localStorage.getItem("customerId"), ...input})
            // console.log(response.data);
            // alert(response.data.msg);
            toast.success(response.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg)
        }
        
    }
    return(
        <>
            <div style={{textAlign:"center"}} id="withdrawMainDiv">
                {/* <h2 style={{marginBottom:"20px"}}>ResetPassword</h2>
                <div id="resetPasswordInput">
                    Enter Old Password : <input type="text"  name="oldPassword" onChange={handelInput}/>
                </div>
                <div id="resetPasswordInput">
                    Enter New Password : <input type="text" name="NewPassword" onChange={handelInput}/>
                </div>
                <div id="resetPasswordInput">
                    Re-enter New Password : <input type="text" name="ReEnterPassword" onChange={handelInput}/>
                </div>
                <button onClick={handelSubmit}>Change Password</button> */}

                
                <div className="card">
                    <span className="title" id="dashHeading2">Reset Password</span>
                    <form className="form">
                        <div className="group">
                        <input placeholder="" type="text" required="" name="oldPassword" onChange={handelInput} />
                        <label htmlFor="oldPassword">Enter Old Password</label>
                    </div>

                    <div className="group">
                        <input placeholder="" type="text" id="NewPassword" name="NewPassword" required="" onChange={handelInput} />
                        <label htmlFor="NewPassword">Enter New Password</label>
                    </div>

                    <div className="group">
                        <input placeholder="" type="text" id="ReEnterPassword" name="ReEnterPassword" required="" onChange={handelInput}/>
                        <label htmlFor="ReEnterPassword">Re-enter New Password</label>
                    </div>
                    
                        <button onClick={handelSubmit}>Change Password</button>
                    </form>
                </div>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </>
    )
}

export default ResetPassword