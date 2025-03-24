
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import DB_URL from "../config"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
const Login=()=>{

    const [input , setInput] = useState("")

    const navigate = useNavigate();
    
        const handelInput=(e)=>{
            let value = e.target.value;
            let name = e.target.name
            setInput(values=>({...values,[name]:value}));
            console.log(input);
    
        }
    
        const handelSubmit= async(e)=>{
            e.preventDefault();
    
            const api = `${DB_URL}/customer/login`;
            try {
                const response = await axios.post(api , input);
                // console.log(response.data);
            
                    localStorage.setItem("name",response.data.name)
                    localStorage.setItem("email",response.data.email)
                    localStorage.setItem("customerId",response.data.customerid)
                    localStorage.setItem("token",response.data.token)
                    // toast.success(response.data.msg)
                    toast.success("login successfull");
                    navigate("/dashboard");
        
            } catch (error) {
                // console.log("server error");
                toast.error(error.response.data.msg)
            }
            
        }
    return(
        <>
           
           <div id="loginmainDiv">
            <div id="loginSecondDiv">
                <h2 id="headingtwo">Login</h2>
                <div id="formdiv">
                    <label id="inputlabel" >Email</label><br />
                    <input id="loginInput" type="text" name="email" value={input.email} onChange={handelInput} />
                    
                    <br />
                    <label >Password</label><br />
                    <input id="loginInput" type="password" name="password" value={input.password} onChange={handelInput} />

                    <br />
                    <button id="loginsubmitbtn" onClick={handelSubmit} >Submit</button>
                    <br />
                    <span>Don't have Account? <Link id="loginformtoRegisterlink" to={"/registration"} >Register Now</Link></span>
                </div>
            <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </div>
        </>
    )
}

export default Login