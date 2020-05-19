import React, {useEffect, useState, useContext} from "react";
import {Link, Route, __RouterContext, Switch} from "react-router-dom";
import Project from "./Project";
import {Button, Popover, OverlayTrigger, Carousel, CarouselItem, Col, Container} from "react-bootstrap";
import projects from "../../../../data/projects";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight , faTimes} from "@fortawesome/free-solid-svg-icons";
import {Swipeable} from "react-swipeable";


const ProjectSlider = (props) => {
    const id  = props.match.params.id;
    let prev = id - 1;
    let next = prev + 2;

    const Next =  () => {
        if (next < projects.length) {
            props.history.push("/projects/"+next);

        }
    }
    const Prev = () => {
        if (prev >= 0 ) {
            props.history.push("/projects/"+prev);
        }
    }


    return(
        <>
            <Swipeable onSwipedLeft={() => {Next()}}  onSwipedRight={() => {Prev()}}>
                    <Project  id={id}/>
            </Swipeable>
            {prev < 0 ? (
                null
            ) : (
                <Link to={"/projects/"+ prev}><FontAwesomeIcon className={"icon icon-prev"} icon={faAngleLeft}/></Link>
            )}
            {next < (projects.length) ? (
                <Link to={"/projects/"+ next}><FontAwesomeIcon className={"icon icon-next"}  icon={faAngleRight}/></Link>
            ) : (
                null
            )}
        </>
    )
}
export default  ProjectSlider;