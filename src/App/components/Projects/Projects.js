import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faSearch} from "@fortawesome/free-solid-svg-icons";

import {Row, Col, Card} from 'react-bootstrap';
import "./Projects.css";
import LanguageContext from "../../context/LanguageContext";

const Projects = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const {language, projects} = useContext(LanguageContext);
    const  [projectsList, setProjectList] = useState([]);
    useEffect(() => {
        setProjectList(projects);
    }, [language])
    const shorten = (str) => {

        if (str.lenght <= 100) {
            return str + " ...";
        } else {
            return str.slice(0,100) + " ...";
        }
    }

    const SearchHandler = (e) => {
        setProjectList(projects.filter((project)  => project.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>
            <h2 className={"underline"}>{language === "fr" ? ("Mes Projets"):("My Projects")}</h2>
            <div className="search-bar">
                <input type="text" placeholder={language === "fr" ? ("Rechercher un projet") : ("Search a project")} onChange={SearchHandler}/>
            </div>
            <Row lg={3} md={2} xs={1}>
                    {projectsList.map((project, key) => {
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