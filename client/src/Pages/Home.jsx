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
             <div style={{width:"100%",height:"95vh", background:"overflow-hidden" }}>
                <img src="home page img.jpg" alt="" width={"100%"} height={"100%"}/>
             </div>
             <div id="description">
                <div class="descriptioncontainer">
                    <h2>Welcome to Your Trusted Online Banking</h2>
                    <p>
                        Welcome to <strong>[E-BANKING]</strong>, your trusted partner in seamless online banking. 
                        Manage your finances effortlessly with secure deposits, instant withdrawals, and real-time mini statements. 
                        Stay in control with personalized account statements and a hassle-free password reset system. 
                        Our user-friendly platform ensures smooth and secure transactions anytime, anywhere. 
                        Enjoy the convenience of modern banking with top-tier security and reliability. 
                        Join us today and experience the future of financial freedom at your fingertips. 
                        <strong>Banking made simple, secure, and smart—just for you!</strong>
                    </p>
                </div>
            </div>

        </>
    )
}

export default Home