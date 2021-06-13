import React, {useContext} from "react";
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFilePdf, faHome, faSuitcase} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogleDrive, faFacebookF, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import LanguageContext from "../../context/LanguageContext";


const Contact = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const {language} = useContext(LanguageContext);
    return (
        <>
            <h2 className={"underline"}>Contact</h2>
            <div className={"contact-info"}>
                <div>
                    <p><FontAwesomeIcon icon={faHome}/> {language === "fr" ? ("L'Île-Perrot ") : ("L'Ile-Perrot ")}</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faEnvelope}/> macastellon101@gmail.com</p>
                </div>
                <div>
                    <p><img width={"20px"} src={"/images/spiria_mini.png"}/> {language === "fr" ? ("Développeur Web chez Spiria"):("Web Developer at Spiria")}</p>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44827.691439371076!2d-74.00618195335987!3d45.39460264950841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9386fffb06e0b%3A0x2f72c0db31959b4a!2sL&#39;%C3%8Ele-Perrot%2C%20QC!5e0!3m2!1sen!2sca!4v1610544780807!5m2!1sen!2sca"
                width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
                tabIndex="0" className={"googleMap"}
                title={"Map"}></iframe>

            <Row lg={3} md={1} xs={1}>
                <Col>
                    <div className={"contact-title"}>
                        <h3 >Curriculum vitae</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="/files/maCastellon_cv.pdf" className={"btContactAlt"} download><FontAwesomeIcon icon={faFilePdf}/></a>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3 className={"contact-title"}>{language === "fr" ? ("Réseaux Sociaux"):("Social Media")}</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="https://www.linkedin.com/in/marc-andr%C3%A9-castellon-409944190/" className={"btContactAlt"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a href="https://www.facebook.com/castel.mvp" className={"btContactAlt"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="https://twitter.com/Argamilwins" className={"btContactAlt"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3 className={"contact-title"}>GitHub</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="https://github.com/MACastellon" className={"btContactAlt"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </Col>
            </Row>
            <div className={"contact-mail"}>
                <a href="mailto:macastellon101@gmail.com" className={"btLink"}>{language === "fr" ? ("Écrivrez moi"):("Send Message")} <FontAwesomeIcon icon={faEnvelope}/></a>
            </div>
        </>
    )
}

export default Contact;
