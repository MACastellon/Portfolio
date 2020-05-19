import React, {useContext} from "react";
import {Container, Row, Col, Card, Button, Image ,Form} from 'react-bootstrap';
import {FormGroup, FormText} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFilePdf, faHome,faPhoneAlt, faSuitcase} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogleDrive, faFacebookF, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import LanguageContext from "../../context/LanguageContext";
const Contact = () => {
    const {language} = useContext(LanguageContext);
    return (
        <>
            <h2 className={"underline"}>Contact</h2>
            <div className={"contact-info"}>
                <div>
                    <p><FontAwesomeIcon icon={faHome}/> Vaudreuil-Dorion</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faEnvelope}/> castel.mvp@gmail.com</p>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faSuitcase}/> {language == "fr" ? ("En recherche d'emploi"):("Looking for a job")} </p>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179302.80163442204!2d-74.22714334874964!3d45.39711258514924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc935fe287e6f93%3A0x5040cadae4d5050!2sVaudreuil-Dorion%2C%20QC!5e0!3m2!1sen!2sca!4v1588962440634!5m2!1sen!2sca"
                width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
                tabIndex="0" className={"googleMap"}></iframe>

            <Row lg={3} md={1} xs={1}>
                <Col>
                    <div className={"contact-title"}>
                        <h3 >Curriculum vitae</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="/files/maCastellon_cv.pdf" className={"btContactAlt"} download><FontAwesomeIcon icon={faFilePdf}/></a>
                        <a href="" className={"btContactAlt"} download><FontAwesomeIcon icon={faGoogleDrive}/></a>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3 className={"contact-title"}>{language == "fr" ? ("Réseaux Sociaux"):("Social Media")}</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="https://www.linkedin.com/in/marc-andr%C3%A9-castellon-409944190/" className={"btContactAlt"} target={"_blank"}><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a href="https://www.facebook.com/castel.mvp" className={"btContactAlt"} target={"_blank"}><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="https://twitter.com/Argamilwins" className={"btContactAlt"} target={"_blank"}><FontAwesomeIcon icon={faTwitter}/></a>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3 className={"contact-title"}>GitHub</h3>
                    </div>
                    <div className={"contact-section"}>
                        <a href="https://github.com/MACastellon" className={"btContactAlt"} target={"_blank"}><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                </Col>
            </Row>
            <div className={"contact-mail"}>
                <a href="mailto:castel.mvp@gmail.com" className={"btLink"}>{language == "fr" ? ("Écrivrez moi"):("Send Message")} <FontAwesomeIcon icon={faEnvelope}/></a>
            </div>
        </>
    )
}

export default Contact;
