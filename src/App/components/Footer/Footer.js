import React from "react";
import {Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub , faFacebookF, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
    return(
        <footer>
            <Nav className="justify-content-center">
                <a href={"https://github.com/MACastellon"} target={"_blank"} rel="noreferrer"  className={"btContact"}><FontAwesomeIcon icon={faGithub}/></a>
                <a href={"https://www.linkedin.com/in/marc-andr%C3%A9-castellon-409944190/"} target={"_blank"} rel="noreferrer"   className={"btContact"}><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href={"https://www.facebook.com/castel.mvp"} target={"_blank"} rel="noreferrer" className={"btContact"}><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href={"https://www.facebook.com/castel.mvp"} target={"_blank"} rel="noreferrer"  className={"btContact"}><FontAwesomeIcon icon={faTwitter}/></a>
            </Nav>
        </footer>


    )
}

export  default  Footer;