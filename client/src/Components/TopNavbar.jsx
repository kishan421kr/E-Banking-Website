import { useState } from "react"
import { Link } from "react-router-dom"

const TopNav=()=>{
    const [isOpen ,setIsOpen] = useState(false);
    return(

        <>
            

            <div id="maindiv">
                <article id="logoarticle"><img src={"/ebankinglogo.png"} alt="" width={"120"} height={"27"}/></article>
                <article id="navbararticle">
                    <Link id="navbarlink" to={"home"}>Home</Link>
                    <Link id="navbarlink" to={"registration"}>Registration</Link>
                    <Link id="navbarlink" to={"login"}>Login</Link>
                </article>
                <article>
                    <div id="searchbar">Search Bar</div>
                </article>
                <div id="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>

            </div>
            <div id="sidebar" style={{display:`${isOpen?"block":"none"}`}}>
                <article id="Sidenavbar">
                        <Link id="sidenavbarlink" to={"home"}>Home</Link>
                        <Link id="sidenavbarlink" to={"registration"}>Registration</Link>
                        <Link id="sidenavbarlink" to={"login"}>Login</Link>
                </article>
            </div>

        
        </>
    )
}

export default TopNav