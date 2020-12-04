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
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (filter !== "") {
            setProjectList(projects.filter((project)  => project.category === filter));
        } else {
            setProjectList(projects);
        }
    }, [projects,language,filter])


    const shorten = (str) => {
        if (str.toString().length >= 100) {
            return str.slice(0,100) + " ...";
        } else {
            return str;
        }
    }
    
    return (
        <>
            <h2 className={"underline"}>{language === "fr" ? ("Mes Projets"):("My Projects")}</h2>

            <div className={"filter-section"}>
                <button className={filter === "" ? ("btFilter filter-active") : ("btFilter")} onClick={() => setFilter('')}>{language === "fr" ? ("Tous") : ("All")}</button>
                <button className={filter === "web" ? ("btFilter filter-active") : ("btFilter")} onClick={() => setFilter('web')}>{language === "fr" ? ("Web") : ("Web")}</button>
                <button className={filter === "game" ? ("btFilter filter-active") : ("btFilter")} onClick={() => setFilter('game')}>{language === "fr" ? ("Jeux") : ("Games")}</button>
            </div>
            <Row lg={3} md={2} xs={1}>
                    {projectsList.map((project, key) => {
                        return (
                            <Col key={key}>
                                    <div className={'card'}>
                                        <Card.Img  variant={"top"} src={project.image} />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>
                                                {shorten(project.descriptions[0].description)}
                                            </Card.Text>
                                            {
                                                console.log(projects.length - project.id)
                                            }
                                            <Link  to={{pathname: '/projects/'+(projects.length - project.id - 1)}} class={"btLink"}>{language === "fr" ? ("En savoir plus"):("Learn More")} <FontAwesomeIcon icon={faArrowRight}/></Link>
                                        </Card.Body>
                                    </div>
                            </Col>
                        )})}
            </Row>
        </>
    )
}
export default Projects;