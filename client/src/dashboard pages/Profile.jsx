import axios from "axios"
import { useEffect, useState } from "react"
import DB_URL from "../config"



const Profile=()=>{

    const [profileData , setProfile] = useState({});

    const loaddata = async()=>{
        const api = `${DB_URL}/customer/profile`
        try {
            const response = await axios.post(api,{customerid:localStorage.getItem("customerId")});
            // console.log(response);
            setProfile(response.data)
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }

    useEffect(()=>{
        loaddata();
    },[])
    
    

    return(
        <>
            <div id="Mprofile">
                <div id="profileMainDiv">
                        <div className="cookieCard">
                        <p className="cookieHeading">{profileData.FirstName } {profileData.LastName}</p>
                        <p className="cookieDescription">Account No. <strong>{profileData.AccountNumber}    </strong> IFSC No. <strong>{profileData.IFSCnumber}</strong></p>
                        <p className="cookieDescription">Mobile No. <strong>{profileData.Number}    </strong> Email : <strong>{profileData.Email}</strong></p>
                        <p className="cookieDescription">Address : <strong>{profileData.Address}    </strong> City : <strong>{profileData.City}</strong></p>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Profile