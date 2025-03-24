import Footer from "./Components/Footer"
import TopNav from "./Components/TopNavbar"
import {Outlet} from "react-router-dom"
const Layout=()=>{
    return(

        <>
            <TopNav/>

            <Outlet/>
            
            <Footer/>
        
        </>
    )
}

export default Layout