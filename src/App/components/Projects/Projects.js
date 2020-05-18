import React, {useState} from "react";
import Project from "./Project/Project";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTwitter, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import projects from "../../../data/projects";
import {Container, Row, Col, Card, Button, Image , Spinner} from 'react-bootstrap';
import "./Projects.css";


const Projects = (props) => {

    const shorten = (str) => {

        if (str.lenght <= 100) {
            return str + " ...";
        } else {
            return str.slice(0,100) + " ...";
        }
    }

    return (
        <>
            <h2 className={"underline"}>Mes projets</h2>
                    <Row lg={3} md={2} xs={1}>
                    {projects.map((project, key) => {
                        return (
                            <Col key={key}>
                                    <Card>
                                        <Card.Img  variant={"top"} src={project.image} />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>
                                                {shorten(project.descriptions[0].description)}
                                            </Card.Text>
                                            <Link  to={{pathname: '/projects/'+project.id }} class={"btLink"}>En savoir plus  <FontAwesomeIcon icon={faArrowRight}/></Link>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        )
                    })}
                    </Row>
            </>
    )
}
export default Projects;