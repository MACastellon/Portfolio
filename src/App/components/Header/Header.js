import React from "react";
import {NavLink} from "react-router-dom";
import {Nav, Navbar, Container, Image} from "react-bootstrap";


import "./Header.css";

const Header = (props) => {

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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
    )
}

export  default  Header;