import React, {useContext} from "react";
import {NavLink, Link} from "react-router-dom";
import {Nav, Navbar, Container, Image} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";
import {fr_header} from "../../../data/fr_header";

import "./Header.css";

const Header = (props) => {
    const {language, changeLanguageFn} = useContext (LanguageContext)

    return(
        
        <header>
                <Navbar collapseOnSelect expand="lg" variant={"dark"}>
                    <Container>
                        <div className={"brand"}>
                            <Image src={"/logo.svg"}  width={"75px"} fluid/>
                            <Navbar.Brand href="/home"> <h1>Marc-André Castellon</h1><p>Programmeur</p></Navbar.Brand>
                        </div>
                        <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse  id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={NavLink} eventKey={1} to="/home">Accueil</Nav.Link>
                                <Nav.Link as={NavLink} eventKey={2} to="/projects">Projets</Nav.Link>
                                <Nav.Link as={NavLink} eventKey={3} to="/contact">Contact</Nav.Link>
                            </Nav>
                            {language == null ? (
                                null
                            ) : (
                                <>
                                    {language === "fr" ? (<Nav.Link as={Link} eventKey={4} className={"languageSwap"} onClick={() => changeLanguageFn("en")}>English</Nav.Link>) : (<Link onClick={() => changeLanguageFn("fr")} className={"languageSwap"} >Français</Link>)}
                                </>
                            )}
                        </Navbar.Collapse>

                    </Container>
                </Navbar>

        </header>
    )
}

export  default  Header;