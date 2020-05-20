import React, {useContext} from "react";
import {NavLink, Link} from "react-router-dom";
import {Nav, Navbar, Container, Image} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";


import "./Header.css";

const Header = (props) => {
    const {language, changeLanguageFn} = useContext (LanguageContext)

    return(
        <header>
            <Navbar collapseOnSelect expand="lg" variant={"dark"}>
                <Container>
                    <div className={"brand"}>
                        <Image src={"/logo.svg"}  width={"75px"} fluid/>
                        <Navbar.Brand href="/home"> <h1>Marc-André Castellon</h1><p>{language === "fr" ? ("Programmeur"):("Programmer")}</p></Navbar.Brand>
                    </div>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse  id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} eventKey={1} to="/home">{language === "fr" ? ("Accueil"):("Home")}</Nav.Link>
                            <Nav.Link as={NavLink} eventKey={2} to="/projects">{language === "fr" ? ("Projets"):("Projects")}</Nav.Link>
                            <Nav.Link as={NavLink} eventKey={3} to="/contact">Contact</Nav.Link>
                        </Nav>
                        {language === "fr" ? (<Link eventKey={4}  className={"languageSwap btLinkAlt"} onClick={() => changeLanguageFn("en")}>English</Link>) : (<Link eventKey={4} onClick={() => changeLanguageFn("fr")} className={"languageSwap btLinkAlt"} >Français</Link>)}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export  default  Header;