import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";

const ChooseLanguage = () => {
    const {changeLanguageFn} = useContext(LanguageContext);
    return (
        <>
            <Image src={"/logo.svg"}  />
            <h2>Portfolio</h2>
            <button className={"btLinkAlt"} onClick={() => {changeLanguageFn("fr")} }>Français</button>
            <button className={"btLinkAlt"} onClick={() => {changeLanguageFn("en")} }>English</button>
        </>
    )
}

export default ChooseLanguage;