import { Outlet, useNavigate } from "react-router-dom"
import {Link} from "react-router-dom"
import { BsBank } from "react-icons/bs";
import { PiHandWithdraw , PiHandDeposit } from "react-icons/pi";
import { MdManageAccounts } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const Dashboard=()=>{
    const navigate = useNavigate();
    const handelLogout=()=>{
        localStorage.clear();
        toast.info("Logged Out")
        navigate("/login");
    }

    const checkToken = async()=>{
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/home");
            }
            
        }
    
        useEffect(()=>{
            checkToken();
        },[])
    return(
        <>
            <h1 id="dashHeading" >Welcome to Dashboard </h1>
            <div id="displayBar">
                <div><span style={{fontSize:"20px", marginRight:"5px"}}>Welcome</span> <strong style={{textDecoration:"underline"}}>{localStorage.getItem("name")}</strong></div>
                {/* <div>Email : {localStorage.getItem("email")}</div> */}

                <div id="DashLogoutBtn" onClick={handelLogout}><AiOutlineLogout /> Logout</div>
            </div>
            
            <div id="dashMid">
                <article id="articalone">
                    <div ><Link id="dashLink" to={"balanceInquiry"}><BsBank />  Balance Inquiry</Link></div>
                    <div ><Link id="dashLink" to={"accountSatement"}><FaBook />  
                    Account Statement</Link></div>
                    <div ><Link id="dashLink" to={"deposite"}><PiHandDeposit />  Deposit Cash</Link></div>
                    <div ><Link id="dashLink" to={"withdrawal"}><PiHandWithdraw />
                    Withdrawal cash</Link></div>
                    <div ><Link id="dashLink" to={"miniStatement"}><GrNotes />  Mini Statement</Link></div>
                    <div ><Link id="dashLink" to={"profile"}><MdManageAccounts />
                    Profile</Link></div>
                    <div ><Link id="dashLink" to={"resetPassword"}><RiLockPasswordLine />  Reset Password</Link></div>  
                      
                </article>
                <article id="OutletSection">
                    < Outlet/>
                </article>
            </div>

            {/* mobile view nav bar */}
            <div id="MobNavBar">
                <div id="mNavBar">
                    <div id="MFirstNav">
                        <div id="mStylelink"><Link id="dashLink" to={"balanceInquiry"}><BsBank />  Balance Inquiry</Link></div>
                        <div id="mStylelink" ><Link id="dashLink" to={"accountSatement"}><FaBook />  
                        Account Statement</Link></div>
                        <div id="mStylelink" ><Link id="dashLink" to={"deposite"}><PiHandDeposit />  Deposit Cash</Link></div>
                        
                    </div>
                    <div id="MSectNav" >
                        <div id="mStylelink" ><Link id="dashLink" to={"withdrawal"}><PiHandWithdraw />
                        Withdrawal cash</Link></div>
                        <div id="mStylelink" ><Link id="dashLink" to={"miniStatement"}><GrNotes />  Mini Statement</Link></div>
                        <div id="mStylelink" ><Link id="dashLink" to={"profile"}><MdManageAccounts />
                        Profile</Link></div>
                        <div id="mStylelink" ><Link id="dashLink" to={"resetPassword"}><RiLockPasswordLine />  Reset Password</Link></div>  
                        
                    </div>
                    
                </div>
                <div id="OutletSection">
                    < Outlet/>
                </div>
            </div>

            {/* small mobile veiw Nav bar*/}
            <div id="SMobNavBar">
                <div id="SMdisplayBar">
                    <div><span style={{fontSize:"20px", marginRight:"5px"}}>Welcome</span> <strong style={{textDecoration:"underline"}}>{localStorage.getItem("name")}</strong></div>
                    {/* <div>Email : {localStorage.getItem("email")}</div> */}

                    <div id="DashLogoutBtn" onClick={handelLogout}><AiOutlineLogout /> Logout</div>
                    <div id="mStylelink" ><Link id="dashLink" to={"profile"}><MdManageAccounts />
                        Profile</Link></div>
                </div>
            
                    <div id="mNavBar">
                        <div id="MFirstNav">
                            <div id="mStylelink"><Link id="dashLink" to={"balanceInquiry"}><BsBank />  Balance Inquiry</Link></div>
                            <div id="mStylelink" ><Link id="dashLink" to={"accountSatement"}><FaBook />  
                            Account Statement</Link></div>
                            <div id="mStylelink" ><Link id="dashLink" to={"deposite"}><PiHandDeposit />  Deposit Cash</Link></div>
                            
                        </div>
                        <div id="MSectNav" >
                            <div id="mStylelink" ><Link id="dashLink" to={"withdrawal"}><PiHandWithdraw />
                            Withdrawal cash</Link></div>
                            <div id="mStylelink" ><Link id="dashLink" to={"miniStatement"}><GrNotes />  Mini Statement</Link></div>
                        
                            <div id="mStylelink" ><Link id="dashLink" to={"resetPassword"}><RiLockPasswordLine />  Reset Password</Link></div>  
                            
                        </div>
                    
                    </div>
                        <div id="OutletSection">
                            < Outlet/>
                        </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}

export default Dashboard