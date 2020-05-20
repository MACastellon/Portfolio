import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import projects from "../../../data/fr_projects";
import {Row, Col, Card} from 'react-bootstrap';
import "./Projects.css";
import LanguageContext from "../../context/LanguageContext";

const Projects = (props) => {
    const {language} = useContext(LanguageContext);
    const shorten = (str) => {

        if (str.lenght <= 100) {
            return str + " ...";
        } else {
            return str.slice(0,100) + " ...";
        }
    }

    return (
        <>
            <h2 className={"underline"}>{language === "fr" ? ("Mes Projets"):("My Projects")}</h2>
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
                                            <Link  to={{pathname: '/projects/'+project.id }} class={"btLink"}>{language === "fr" ? ("En savoir plus"):("Learn More")} <FontAwesomeIcon icon={faArrowRight}/></Link>
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