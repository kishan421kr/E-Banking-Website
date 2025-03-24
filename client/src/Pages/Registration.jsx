import { useState } from "react";

import DB_URL from "../config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Registration=()=>{
    const navigate = useNavigate();
    const [input, setInput] = useState({}); 

    const handelInput = (e) => {
        const { name, value } = e.target;
        setInput((Values) => ({ ...Values, [name]: value }));
        console.log(input);
    };

const handelSubmit=async()=>{
    const api = `${DB_URL}/customer/registration`;
    try {
        const response = await axios.post(api,input);
        console.log(response.data);
        alert(response.data.msg)
        toast.success(response.data.msg);
        navigate("/login");
    } catch (error) {
        // console.log("data base not found");
        toast.error(error.response.data.msg);
    }
    

}

    return(

        <>
        <div id="formMainDiv">
            <div id="formsecondDiv">
                <h2 id="headingtwo">Registration</h2>
       
                <div id="formdiv">

                    <label id="inputlabel" >First Name</label><br />
                    <input id="loginInput" type="text" name="firstName" onChange={handelInput} />
                    <br />

                    <label id="inputlabel" >Last Name</label><br />
                    <input id="loginInput" type="text" name="laststName" onChange={handelInput}/>
                    <br />

                    <label id="inputlabel" >Mobile Number</label><br />
                    <input id="loginInput" type="text" name="Number" onChange={handelInput}/>
                    <br />

                    <label id="inputlabel" >Address</label><br />
                    <input id="loginInput" type="text" name="address" onChange={handelInput} />
                    <br />

                    <label id="inputlabel" >City</label><br />
                    <input id="loginInput" type="text" name="city" onChange={handelInput}/>
                    <br />

                    <label id="inputlabel" >Email</label><br />
                    <input id="loginInput" type="email" name="email" onChange={handelInput} />
                    

                    <br />
                    <button id="loginsubmitbtn" onClick={handelSubmit}>Register</button>
                </div>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
           
                
        </div>
        </>
    )
}

export default Registration