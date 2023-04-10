import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>

                <span className="social-icons">
                    
                    
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/samruddhi-jagtap-126089262/"  >
                          <FaLinkedinIn size={14} style={{ color: "white" }}/>
                        </a>
                    </div>
                    
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/samruddhi-jagtap-126089262/"  >
                          <FaFacebookF size={14} style={{ color: "white" }}/>
                        </a>
                    </div>

                    <div className="icon">
                        <a href="https://twitter.com/home" >
                          <FaTwitter size={14} style={{ color: "white" }} />
                        </a>
                        
                    </div>

                    <div className="icon">
                        <a href="https://www.linkedin.com/in/samruddhi-jagtap-126089262/"  >
                          <FaInstagram size={14} style={{ color: "white" }} />
                        </a>   
                    </div>
                </span>


                {/* <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span> */}
            </div>
        </div>
    );
};

export default Newsletter;