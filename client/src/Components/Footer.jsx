




const Footer=()=>{
    return(

        <>
        
        <footer>
            <div className="footer-container">
                {/* <!-- Logo and About Section --> */}
                <div className="footer-section about">
                    <img src="ebankinglogo.png" alt=" Logo" className="footer-logo"/>
                    <p>Experience seamless banking with us. Open an account today and enjoy secure, hassle-free transactions.</p>
                </div>
        
                {/* <!-- Quick Links --> */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#menu">Registration</a></li>
                        <li><a href="#contact">login</a></li>
                    </ul>
                </div>
        
                {/* <!-- Contact Information --> */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-phone-alt"></i> +1 234 567 890</p>
                    <p><i className="fas fa-envelope"></i> Ebanking@gmail.com</p>
                </div>
        
                
            </div>
        
            {/* <!-- Footer Bottom --> */}
            <div className="footer-bottom">
                <p>&copy; 2024 Gourmet Restaurant | All Rights Reserved</p>
                <div className="social-media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer