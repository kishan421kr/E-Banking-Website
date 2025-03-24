import { Link } from "react-router-dom"

const TopNav=()=>{
    return(

        <>
            

            <div id="maindiv">
                <article><img src={"/ebankinglogo.png"} alt="" width={"120"} height={"27"}/></article>
                <article id="navbararticle">
                    <Link id="navbarlink" to={"home"}>Home</Link>
                    <Link id="navbarlink" to={"registration"}>Registration</Link>
                    <Link id="navbarlink" to={"login"}>Login</Link>
                </article>
                <article>
                    <div id="searchbar">Search Bar</div>
                </article>
            </div>
        
        </>
    )
}

export default TopNav