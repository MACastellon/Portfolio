import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import projects from "../../../../data/projects";
import {Container, Row, Col, Card, Button, Image, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./Project.css";
import {Link} from "react-router-dom";
import {Swipeable } from 'react-swipeable'
import {CSSTransition, TransitionGroup} from "react-transition-group";




const Project = (props) => {

    const id  = props.id;
    const project = projects[id];
    return (
        <>
            <div className={"goBack"}><Link to={"/projects"}><FontAwesomeIcon icon={faArrowLeft}/> Retour à la liste de projets</Link></div>
            <h2 className={"underline project-title"}>{project.title}</h2>
            <Row lg={2} md={1} xs={1}>
                <Col>
                    {project.youtubeId ? (
                        <div className="embed-responsive embed-responsive-16by9 project-visual">
                            <iframe className="embed-responsive-item"
                                    src={"https://www.youtube.com/embed/" + project.youtubeId}></iframe>
                        </div>
                    ) : (
                        <Image src={project.image} fluid className={"project-visual"}></Image>
                    )}
                </Col>
                <Col>
                    <div className={"info"}>
                        <h3>À propos</h3>
                        {project.descriptions.map((desc , key) => {
                            return <p>{desc.description}</p>
                        })}
                    </div>
                    <div className={"info"}>
                        <h3>Langage</h3>
                        <p>{project.language}</p>
                    </div>
                    <div className={"info"}>
                        <h3>Logiciel(s) / outils utilisée(s)</h3>
                        <ul className={"list"}>
                            {project.softwares.map((software) => {
                                return <li>{software.name}</li>
                            } )}
                        </ul>
                    </div>
                    {project.contributions? (
                        <div className={"info"}>
                            <h3>Contributions</h3>
                            <ul className={"list"}>
                                {project.contributions.map((contribution , key) => {
                                    return <li>{contribution.description}</li>
                                })}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}
                    {project.role? (
                        <div className={"info"}><h3>Rôle</h3>{project.role}</div>
                    ) : (
                        null
                    )}
                    {project.note? (
                        <div className={"info"}><b>Important : {project.note}</b></div>
                    ) : (
                        null
                    )}
                    {project.github? (
                        <div>
                            <a href={project.github} className="btLink btInfo" target="_blank"> GitHub <FontAwesomeIcon
                                icon={faGithub}/></a>
                        </div>
                    ) : (
                        null
                    )}
                </Col>
            </Row>
        </>
    )
}

export default  Project;