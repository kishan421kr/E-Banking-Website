import axios from "axios";
import DB_URL from "../config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const Home=()=>{
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    

    const checkToken = async()=>{
        if(token){
            try {
                const api = `${DB_URL}/customer/authentication`
                const response = await axios.post(api,null,{headers:{"x-token":token}});
                
                if(response.data.success){
                    navigate("/dashboard");
                }
                
            } catch (error) {
                localStorage.clear();
            }
        }
        
    }

    useEffect(()=>{
        checkToken();
    },[])

    return(

        <>  
             {/* <h1>Home Page</h1> */}
             <div style={{width:"100%",height:"95vh"}}>
                <img src="home page img.jpg" alt="" width={"100%"} height={"100%"}/>
             </div>

        </>
    )
}

export default Home