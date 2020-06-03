import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";

const ChooseLanguage = () => {
    const {changeLanguageFn} = useContext(LanguageContext);
    return (
        <>
            <img src={"/logo.svg"}  />
            <h2>Portfolio</h2>
            <Link className={"btLinkAlt"} onClick={() => {changeLanguageFn("fr")} }>Français</Link>
            <Link className={"btLinkAlt"} onClick={() => {changeLanguageFn("en")} }>English</Link>
        </>
    )
}

export default ChooseLanguage;